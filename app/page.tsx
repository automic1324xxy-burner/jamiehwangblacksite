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
            My name is Jamie Hwang-Black. I was born and raised in Daejeon,
            South Korea. I am a multidisciplinary artist currently residing in
            Chicago, centered in printmaking, collage, and mixed media art.
          </p>
        </div>
      </section>

      <section className="faces-section">
        <div className="faces-scroll">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face1.PNG-ol3JOxkaXcXkxrBbrq181kqaJxWw8f.png" alt="Face 1" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face2.PNG-AfIpJO7oeIDNCoM0GYRT4kUcEx7oVU.png" alt="Face 2" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face3.PNG-g2oNj3XtvKJ20JuLEfkywklsGQs3E5.png" alt="Face 3" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face4.PNG-H4w4ogSBCwxPMXZesf9NX2fBF2HvvF.png" alt="Face 4" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face5.PNG-90ZfsGK9A0bvG92ae40lVCRM5j52zE.png" alt="Face 5" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face6.PNG-Bn3CMDpnV6h6wimsYgApQME3hgS8dL.png" alt="Face 6" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face7.PNG-IVD1Df71n1PFXNhDCAT7ZwwWefGlgy.png" alt="Face 7" />
          {/* Duplicate faces for seamless loop */}
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face1.PNG-ol3JOxkaXcXkxrBbrq181kqaJxWw8f.png" alt="Face 1" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face2.PNG-AfIpJO7oeIDNCoM0GYRT4kUcEx7oVU.png" alt="Face 2" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face3.PNG-g2oNj3XtvKJ20JuLEfkywklsGQs3E5.png" alt="Face 3" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face4.PNG-H4w4ogSBCwxPMXZesf9NX2fBF2HvvF.png" alt="Face 4" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face5.PNG-90ZfsGK9A0bvG92ae40lVCRM5j52zE.png" alt="Face 5" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face6.PNG-Bn3CMDpnV6h6wimsYgApQME3hgS8dL.png" alt="Face 6" />
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face7.PNG-IVD1Df71n1PFXNhDCAT7ZwwWefGlgy.png" alt="Face 7" />
        </div>
      </section>

      <a href="/traditional" className="strip">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/traditional.JPG-CkwpcNA21IM0bo9iDQWUlbjMaCnev7.jpeg"
          alt="Traditional Art"
        />
        <h2>TRADITIONAL</h2>
      </a>

      <a href="/digital" className="strip">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digital.JPG-45y1Q9NBuSMFFRQfgQlwCtI2MCbbIv.jpeg" alt="Digital Art" />
        <h2>DIGITAL</h2>
      </a>

      <a href="/about" className="strip">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about.PNG-WqG4Ml7uNMFfCzrYk4RRbnGn5vFlJw.jpeg" alt="About Me" />
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
