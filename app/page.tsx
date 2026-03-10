'use client';

import { useEffect } from 'react';
import '../styles/artist.css';
import Navbar from '@/components/Navbar';

export default function Home() {
  useEffect(() => {
    // Load gallery images
    async function loadGallery() {
      const gallery = document.getElementById('gallery-grid');
      if (!gallery) return;

      try {
        const response = await fetch('/api/gallery');
        const files = await response.json();

        files.forEach((file: string) => {
          const img = document.createElement('img');
          img.src = `/gallery/${file}`;
          img.loading = 'lazy';
          gallery.appendChild(img);
        });
      } catch (error) {
        console.error('Error loading gallery:', error);
      }
    }

    loadGallery();
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <h1>
            JAMIE<br />
            HWANG<br />
            BLACK
          </h1>
        </div>

        <div className="hero-right">
          <p>
            My name is Jamie Hwang-Black, or 황재연 [Hwah-ng Jeh-Yuhn]. I was born and raised in Daejeon,
            South Korea and I currently reside in Downtown Chicago. I am a multidisciplinary centered in printmaking, collage, and mixed media art.
          </p>
        </div>
      </section>

      <section className="faces-section">
        <div className="faces-scroll">
          <img src="/faces/face1.PNG" alt="Face 1" />
          <img src="/faces/face2.PNG" alt="Face 2" />
          <img src="/faces/face3.PNG" alt="Face 3" />
          <img src="/faces/face4.PNG" alt="Face 4" />
          <img src="/faces/face5.PNG" alt="Face 5" />
          <img src="/faces/face6.PNG" alt="Face 6" />
          <img src="/faces/face7.PNG" alt="Face 7" />
          {/* Duplicate faces for seamless loop */}
          <img src="/faces/face1.PNG" alt="Face 1" />
          <img src="/faces/face2.PNG" alt="Face 2" />
          <img src="/faces/face3.PNG" alt="Face 3" />
          <img src="/faces/face4.PNG" alt="Face 4" />
          <img src="/faces/face5.PNG" alt="Face 5" />
          <img src="/faces/face6.PNG" alt="Face 6" />
          <img src="/faces/face7.PNG" alt="Face 7" />
        </div>
      </section>

      <a href="/traditional" className="strip">
        <img src="/elements/traditional.jpg" alt="Traditional Art" />
        <h2>TRADITIONAL</h2>
      </a>

      <a href="/digital" className="strip">
        <img src="/elements/digital.jpg" alt="Digital Art" />
        <h2>DIGITAL</h2>
      </a>

      <a href="/about" className="strip">
        <img src="/elements/about.jpg" alt="About Me" />
        <h2>ABOUT ME</h2>
      </a>

      <section id="gallery" className="gallery-section">
        <h2 className="gallery-title">GALLERY</h2>

        <p className="gallery-subtitle">All my works in one place, take a scroll! :)</p>

        <div id="gallery-grid" className="gallery-grid"></div>
      </section>
    </>
  );
}
