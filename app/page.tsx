'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import '../styles/artist.css';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const repoName = '/jamiehwangblacksite';

  useEffect(() => {
    // Fetch the static JSON generated at build time
    async function loadGallery() {
      try {
        const response = await fetch(`${repoName}/gallery-data.json`);
        if (response.ok) {
          const data = await response.json();
          setGalleryImages(data);
        }
      } catch (error) {
        console.error('Failed to load gallery data', error);
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
            ELAMIR<br />
            HASSAN<br />
            ELSADY
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
              src={`${repoName}/gallery/${file}`} 
              alt="Gallery item" 
              loading="lazy" 
              className="gallery-item"
            />
          ))}
        </div>
      </section>
    </>
  );
}
