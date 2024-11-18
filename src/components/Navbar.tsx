import React, { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300"
         style={{ backgroundColor: 'var(--accent-yellow)' }}>
      <div className="nav-container">
        {/* Preload logo image */}
        <link rel="preload" href="https://letsmediahub.com.br/wp-content/uploads/2024/10/lets_media_png_04-1.png" as="image" />
        <img 
          src="https://letsmediahub.com.br/wp-content/uploads/2024/10/lets_media_png_04-1.png"
          alt="Let's Studio"
          className="h-16 ml-6"
          style={{
            position: 'relative',
            transform: 'none',
            maxWidth: '250px',
            objectFit: 'contain'
          }}
          width="250"
          height="110"
          loading="eager"
          decoding="async"
        />
        <div className="nav-menu flex items-center">
          <button onClick={() => scrollToSection('features')} className="nav-link">Estrutura</button>
          <button onClick={() => scrollToSection('videos')} className="nav-link">Portfólio</button>
          <button onClick={() => scrollToSection('location')} className="nav-link">Endereço</button>
          <button onClick={() => scrollToSection('newsletter')} className="nav-link">Conteúdos</button>
          <a 
            href="https://api.whatsapp.com/send?phone=5511933336596&text=Oi,%20tudo%20bem?%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20da%20Let%E2%80%99s%20Media.%20"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition ml-4"
          >
            Reservar agora
          </a>
        </div>
      </div>
    </nav>
  );
}