'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Ensure this is imported
import Link from 'next/link';
import '../styles/artist.css';
import Navbar from '@/components/Navbar';

export default function Home() {
  // 1. In a static site, we can't fetch from /api/gallery at runtime.
  // For now, let's use a hardcoded list or you can move the file-reading 
  // logic to a build-time constant.
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    // Since API routes don't work on GitHub Pages, you should manually 
    // list your gallery filenames here for now, or use a static JSON file.
    const staticFiles = ['image1.jpg', 'image2.jpg']; // Add your filenames here
    setGalleryImages(staticFiles);
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
            South Korea and I currently reside in Downtown Chicago. I am a multidisciplinary artist centered in printmaking, digital collage, illustration, and mixed media art.
          </p>
        </div>
      </section>

      <section className="faces-section">
        <div className="faces-scroll">
          {/* 2. Don't hardcode the repo name in the src. 
              Next.js adds it automatically if basePath is in next.config.mjs.
              Also, removed the double // */}
          <Image src="/gallery/faces/face1.PNG" alt="Face 1" width={200} height={200} />
          <Image src="/gallery/faces/face2.PNG" alt="Face 2" width={200} height={200} />
          <Image src="/gallery/faces/face3.PNG" alt="Face 3" width={200} height={200} />
          <Image src="/gallery/faces/face4.PNG" alt="Face 4" width={200} height={200} />
          <Image src="/gallery/faces/face5.PNG" alt="Face 5" width={200} height={200} />
          <Image src="/gallery/faces/face6.PNG" alt="Face 6" width={200} height={200} />
          <Image src="/gallery/faces/face7.PNG" alt="Face 7" width={200} height={200} />
          {/* Duplicates for loop */}
          <Image src="/gallery/faces/face1.PNG" alt="Face 1" width={200} height={200} />
          <Image src="/gallery/faces/face2.PNG" alt="Face 2" width={200} height={200} />
          <Image src="/gallery/faces/face3.PNG" alt="Face 3" width={200} height={200} />
        </div>
      </section>

      <Link href="/traditional" className="strip">
        <img src="/jamiehwangblacksite/elements/traditional.jpg" alt="Traditional Art" />
        <h2>TRADITIONAL</h2>
      </Link>

      <Link href="/digital" className="strip">
        <img src="/jamiehwangblacksite/elements/digital.jpg" alt="Digital Art" />
        <h2>DIGITAL</h2>
      </Link>

      <Link href="/about" className="strip">
        <img src="/jamiehwangblacksite/elements/about.jpg" alt="About Me" />
        <h2>ABOUT ME</h2>
      </Link>

      <section id="gallery" className="gallery-section">
        <h2 className="gallery-title">GALLERY</h2>
        <p className="gallery-subtitle">All my works in one place, take a scroll! :)</p>

        <div id="gallery-grid" className="gallery-grid">
          {galleryImages.map((file, index) => (
            <img 
              key={index} 
              src={`/gallery/${file}`} 
              alt="Gallery item" 
              loading="lazy" 
            />
          ))}
        </div>
      </section>
    </>
  );
}
