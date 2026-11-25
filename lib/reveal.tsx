'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Adds `is-in` to every element with `data-reveal` as it scrolls into view.
 * Sites style the transition; reduced-motion users see content immediately.
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'));
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    document.documentElement.classList.add('reveal-ready');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

/** Toggles the mobile navigation. */
export function NavToggle({ label = 'Menu' }: { label?: string }) {
  return (
    <button
      type="button"
      className="nav-toggle"
      aria-expanded="false"
      aria-controls="site-nav"
      onClick={(e) => {
        const btn = e.currentTarget;
        const open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(open));
        document.getElementById('site-nav')?.classList.toggle('is-open', open);
        document.body.classList.toggle('nav-open', open);
      }}
    >
      <span className="nav-toggle-bars" aria-hidden />
      <span className="pf-sr">{label}</span>
    </button>
  );
}

/** Closes the mobile nav after navigation. */
export function NavCloser() {
  const pathname = usePathname();
  useEffect(() => {
    document.getElementById('site-nav')?.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
  }, [pathname]);
  return null;
}

