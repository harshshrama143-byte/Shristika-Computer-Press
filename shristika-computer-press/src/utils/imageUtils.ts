import React from 'react';

/**
 * Bullet-proof image fallback utility for printing products
 * Ensures that if any external CDN or image URL fails to load,
 * a guaranteed high-resolution alternative or stylized SVG placeholder is shown.
 */

export const FALLBACK_IMAGES: Record<string, string> = {
  'visiting-card': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  'pvc-id-card': 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80',
  'sticker-printing': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
  'banner-flex': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  'wedding-card': 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  'photo-frame': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
  'photo-printing': 'https://images.unsplash.com/photo-1520690214108-217e744f6831?auto=format&fit=crop&w=800&q=80',
  'passport-photo': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  'invitation-card': 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
  'pamphlet-flyer': 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
  'letterhead-envelope': 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
  'certificate-printing': 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
  'school-office-id-cards': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  'custom-printing': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
};

/**
 * Handles image load errors by swapping to a secondary fallback URL or category default
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  categoryOrKey: string = 'default'
) => {
  const target = e.currentTarget;
  const fallback = FALLBACK_IMAGES[categoryOrKey] || FALLBACK_IMAGES['default'];
  
  if (target.src !== fallback) {
    target.src = fallback;
  }
};
