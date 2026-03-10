'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.WEBP-V3gglHA3HHEQgTfTBmccp7arySBO1p.webp" alt="Logo" />
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="/#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          </li>
          <li>
            <a href="/traditional" onClick={() => setIsMenuOpen(false)}>Traditional</a>
          </li>
          <li>
            <a href="/digital" onClick={() => setIsMenuOpen(false)}>Digital</a>
          </li>
          <li>
            <a href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="/about#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
