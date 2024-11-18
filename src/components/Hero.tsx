import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.5 });

    const highlights = document.querySelectorAll('.highlight-text');
    highlights.forEach(highlight => observer.observe(highlight));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 pt-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2a3645499fb72f572990d_WhatsApp Video 2024-02-06 at 181922-poster-00001.jpg"
          preload="auto"
        >
          <source 
            src="https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2a3645499fb72f572990d_WhatsApp Video 2024-02-06 at 181922-transcode.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="text-white z-10">
            <div className="inline-block category-tag mb-4 bg-yellow-300 text-black">LET'S STUDIO</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Produza o podcast da sua{' '}
              <span className="relative text-black px-2">
                <span className="relative z-10">empresa</span>
                <span className="absolute inset-0 bg-yellow-300 transform -skew-x-6"></span>
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-lg">
              Dê vida a projetos que encantem seus convidados e ressoem com sua audiência. 
              Promova histórias, crie relacionamentos e encontre uma nova forma de gerar negócios.
            </p>
            <div className="mt-10">
              <a 
                href="https://api.whatsapp.com/send?phone=5511933336596&text=Oi,%20tudo%20bem?%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20da%20Let%E2%80%99s%20Media.%20"
                className="bg-yellow-300 text-black px-8 py-4 rounded-full hover:bg-yellow-400 transition flex items-center gap-2 inline-flex font-semibold"
              >
                Falar com um especialista pelo Whatsapp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,242,0,0.15)] hover:shadow-[0_0_70px_rgba(255,242,0,0.25)] transition-shadow duration-500">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                poster="https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2a3645499fb72f572990d_WhatsApp Video 2024-02-06 at 181922-poster-00001.jpg"
                preload="auto"
              >
                <source 
                  src="https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2a3645499fb72f572990d_WhatsApp Video 2024-02-06 at 181922-transcode.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-yellow-300 rounded-tl-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-yellow-300 rounded-br-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}