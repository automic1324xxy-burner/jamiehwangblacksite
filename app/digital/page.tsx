'use client';

import { useEffect } from 'react';
import '../../styles/artist.css';
import Navbar from '@/components/Navbar';

export default function Digital() {
  useEffect(() => {
    // Load gallery images filtered by "digital" prefix
    async function loadGallery() {
      const gallery = document.getElementById('gallery-grid');
      if (!gallery) return;

      try {
        const response = await fetch('/api/gallery?prefix=digital');
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

      <section className="hero-title-only">
        <h1>DIGITAL ART</h1>
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
      

      <section id="gallery" className="gallery-section">
        <div id="gallery-grid" className="gallery-grid"></div>
      </section>
    </>
  );
}
