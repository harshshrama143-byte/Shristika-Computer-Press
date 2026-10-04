import React, { useEffect, useState } from 'react';

/**
 * Thin reading-progress line pinned to the top of the viewport.
 * rAF-throttled so it never fights the scroll handler for frames.
 */
export const ScrollProgress: React.FC = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-royal via-royal to-gold shadow-[0_0_10px_rgba(36,87,214,0.55)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};
