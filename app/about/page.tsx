'use client';

import '../../styles/artist.css';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />

      {/* About Me Section */}
      <section className="about-section">
        <div className="about-image">
          <Image src="/jamiehwangblacksite/elements/about.jpg" alt="Jamie Hwang-Black" />
        </div>

        <div className="about-content">
          <h2>ABOUT ME</h2>
          <p>
            My name is Jamie Hwang-Black, or 황재연 [Hwah-ng Jeh-Yuhn]. I was born 
            and raised in Daejeon, South Korea. After some time in Seoul, I moved to 
            Chicago in 2024. I am a multidisciplinary artist centered in printmaking, 
            collage, and mixed media art. I live with my wife and cat in downtown 
            Chicago, which has become the primary inspiration for my art. I like to 
            meld and distort the architectural icons of Chicago to portray what this 
            city makes me feel - whether good or bad.
          </p>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="contact-section">
        <h2>CONTACT ME</h2>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const email = (form.elements.namedItem('email') as HTMLInputElement).value;
          const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
          const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
          
          window.location.href = `mailto:jamiehwangblack@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
        }}>
          <div className="contact-row">
            <input type="email" name="email" placeholder="email" required />
          </div>
          <div className="contact-row">
            <input type="text" name="subject" placeholder="subject" />
            <button type="submit" className="send-btn">send</button>
          </div>
          <textarea name="message" placeholder="write message here" required></textarea>
        </form>

        <p className="contact-email">jamiehwangblack@gmail.com I 황재연</p>
      </section>

      {/* Follow Me Section */}
      <section className="follow-section">
        <h2>FOLLOW ME</h2>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
