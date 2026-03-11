'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../styles/artist.css';
import Navbar from '@/components/Navbar';

export default function Digital() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const repoName = '/jamiehwangblacksite';

  useEffect(() => {
    async function loadGallery() {
      try {
        const response = await fetch(`${repoName}/gallery-data.json`);
        if (response.ok) {
          const allFiles: string[] = await response.json();
          // Filter: Only files starting with "digital"
          const filtered = allFiles.filter(file => 
            file.toLowerCase().startsWith('digital')
          );
          setGalleryImages(filtered);
        }
      } catch (error) {
        console.error('Error loading digital gallery:', error);
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
          {/* Using local files instead of URL links */}
          {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((num, i) => (
            <Image 
              key={i}
              src={`${repoName}/faces/face${num}.PNG`} 
              alt={`Face ${num}`} 
              width={200} 
              height={200} 
              unoptimized
            />
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div id="gallery-grid" className="gallery-grid">
          {galleryImages.map((file, index) => (
            <img 
              key={index} 
              src={`${repoName}/gallery/${file}`} 
              alt="Traditional Art" 
              loading="lazy" 
              className="gallery-item"
            />
          ))}
        </div>
      </section>
    </>
  );
}
