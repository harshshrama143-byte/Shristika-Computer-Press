/**
 * Bonsai-style scroll reveal.
 *
 * Every direct child of a <section> inside <main> fades + rises into view:
 *  - in / above the viewport at load  -> plays a staggered entrance
 *  - below the fold                    -> reveals on scroll (IntersectionObserver)
 *
 * Safety: runs in useLayoutEffect (no flash), never hides decorative or
 * off-screen-above elements, and force-reveals anything still hidden after 4s.
 */

import { useLayoutEffect } from 'react';

const REVEAL_SELECTOR = 'main section > *';
const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6;
const FAILSAFE_MS = 4000;

interface RevealController {
  reveal: (el: HTMLElement, delay: number) => void;
}

export function useScrollReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');

    let observer: IntersectionObserver | null = null;
    const timers: number[] = [];

    const settle = (el: HTMLElement) => {
      el.classList.remove('reveal', 'is-visible', 'hero-enter');
      el.style.transitionDelay = '';
      el.style.animationDelay = '';
    };

    try {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

      const targets = nodes.filter((el) => {
        if (el.classList.contains('is-visible') || el.classList.contains('hero-enter')) return false;
        if (el.getAttribute('aria-hidden') === 'true') return false;
        if (el.offsetHeight < 8) return false;
        const style = getComputedStyle(el);
        return style.position !== 'absolute' && style.position !== 'fixed';
      });

      // Group siblings so cards in a row stagger left-to-right.
      const byParent = new Map<Element, HTMLElement[]>();
      for (const el of targets) {
        const parent = el.parentElement;
        if (!parent) continue;
        const bucket = byParent.get(parent);
        if (bucket) bucket.push(el);
        else byParent.set(parent, [el]);
      }

      const pending: HTMLElement[] = [];

      byParent.forEach((children) => {
        children.forEach((child, index) => {
          const rect = child.getBoundingClientRect();
          const delay = Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS;

          // Already scrolled past on load — leave it alone.
          if (rect.bottom < 0) return;

          if (rect.top < window.innerHeight * 0.9) {
            // Visible at load: play the entrance now.
            child.classList.add('hero-enter');
            child.style.animationDelay = `${delay}ms`;
            const done = () => settle(child);
            child.addEventListener('animationend', done, { once: true });
            timers.push(window.setTimeout(done, delay + 1200));
            return;
          }

          if (!child.classList.contains('reveal')) {
            child.classList.add('reveal');
            child.style.transitionDelay = `${delay}ms`;
          }
          pending.push(child);
        });
      });

      const reveal: RevealController['reveal'] = (el, delay) => {
        el.classList.add('is-visible');
        timers.push(window.setTimeout(() => settle(el), delay + 800));
      };

      if (pending.length === 0) return;

      if (typeof IntersectionObserver === 'undefined') {
        pending.forEach((el) => settle(el));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            observer?.unobserve(el);
            const delay = parseInt(el.style.transitionDelay || '0', 10) || 0;
            reveal(el, delay);
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0 }
      );

      pending.forEach((el) => observer?.observe(el));

      // Failsafe: nothing should ever stay invisible.
      timers.push(
        window.setTimeout(() => {
          const stragglers = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
          stragglers.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight) settle(el);
          });
        }, FAILSAFE_MS)
      );
    } catch {
      document
        .querySelectorAll<HTMLElement>('.reveal, .hero-enter')
        .forEach((el) => settle(el));
    }

    return () => {
      observer?.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      root.classList.remove('js');
    };
  }, []);
}
