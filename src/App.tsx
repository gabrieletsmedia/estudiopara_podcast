import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { VideoSection } from './components/VideoSection';
import { Partners } from './components/Partners';
import { Process } from './components/Process';
import { Location } from './components/Location';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <Partners />
        <Process />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;