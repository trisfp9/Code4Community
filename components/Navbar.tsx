'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/impact', label: 'Impact' },
  { href: '/program', label: 'Program' },
  { href: '/team', label: 'Team' },
  { href: '/get-involved', label: 'Get Involved' },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navClass = `navbar${scrolled || solid ? ' scrolled' : ''}`;

  return (
    <nav className={navClass}>
      <div className="navbar-inner">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
            </svg>
          </div>
          <span className="logo-text">Code 4 Community</span>
        </Link>

        <div className="nav-links">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={`nav-link${pathname === href ? ' active' : ''}`}>
              {label}
            </Link>
          ))}
          <Link href="/donate" className="btn btn-primary">Donate</Link>
        </div>

        <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ href, label }) => (
          <Link key={href} href={href} className={`mobile-nav-link${pathname === href ? ' active' : ''}`}>
            {label}
          </Link>
        ))}
        <div style={{ padding: '1rem 0.75rem 0' }}>
          <Link href="/donate" className="btn btn-primary" style={{ width: '100%' }}>Donate</Link>
        </div>
      </div>
    </nav>
  );
}
