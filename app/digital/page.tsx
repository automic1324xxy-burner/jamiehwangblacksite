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
          {/* 2. Don't hardcode the repo name in the src. 
              Next.js adds it automatically if basePath is in next.config.mjs.
              Also, removed the double // */}
          <Image src="/jamiehwangblacksite/faces/face1.PNG" alt="Face 1" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face2.PNG" alt="Face 2" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face3.PNG" alt="Face 3" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face4.PNG" alt="Face 4" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face5.PNG" alt="Face 5" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face6.PNG" alt="Face 6" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face7.PNG" alt="Face 7" width={200} height={200} />
          {/* Duplicates for loop */}
          <Image src="/jamiehwangblacksite/faces/face1.PNG" alt="Face 1" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face2.PNG" alt="Face 2" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face3.PNG" alt="Face 3" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face4.PNG" alt="Face 4" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face5.PNG" alt="Face 5" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face6.PNG" alt="Face 6" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face7.PNG" alt="Face 7" width={200} height={200} />
          {/* Duplicates for loop */}
          <Image src="/jamiehwangblacksite/faces/face1.PNG" alt="Face 1" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face2.PNG" alt="Face 2" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face3.PNG" alt="Face 3" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face4.PNG" alt="Face 4" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face5.PNG" alt="Face 5" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face6.PNG" alt="Face 6" width={200} height={200} />
          <Image src="/jamiehwangblacksite/faces/face7.PNG" alt="Face 7" width={200} height={200} />
        </div>
      </section>
      

      <section id="gallery" className="gallery-section">
        <div id="gallery-grid" className="gallery-grid"></div>
      </section>
    </>
  );
}
