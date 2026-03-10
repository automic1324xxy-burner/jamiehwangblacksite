'use client';

import { useState } from 'react';
import Link from 'next/link'; // MUST use this for GitHub Pages

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        {/* For images NOT using next/image, you must prefix the path manually or use a helper */}
        <img src="/jamiehwangblacksite/elements/logo.webp" alt="Logo" />
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span><span></span><span></span>
        </span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
          <li><Link href="/traditional" onClick={() => setIsMenuOpen(false)}>Traditional</Link></li>
          <li><Link href="/digital" onClick={() => setIsMenuOpen(false)}>Digital</Link></li>
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href="/about#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
