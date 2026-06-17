'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
    if (!animatedEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    animatedEls.forEach(el => observer.observe(el));

    document.querySelectorAll('.hero .fade-in, .hero .scale-in').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 100);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
