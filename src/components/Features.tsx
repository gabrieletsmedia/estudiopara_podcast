import React, { useEffect } from 'react';
import { Mic, Video, MapPin, Users } from 'lucide-react';

const features = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Áudio Profissional",
    description: "O som é o coração do podcast. Nossa estrutura entrega um som rico, encorpado, cristalino e com uma estética superior por meio dos braços articulados importados.",
    image: "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2e232185964d696447e16_Snapshot_6.PNG"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Vídeo Profissional",
    description: "Qualidade de imagem é a nossa prioridade. Por isso nossas câmeras, lentes de qualidade e sistema de iluminação garantem a cena perfeita para o seu conteúdo.",
    image: "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2e230a52b6cae753d9dd8_Snapshot_9.PNG"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Localização privilegiada",
    description: "Ambiente inovador, agradável e no coração da Vila Madalena em SP. Ótimo para receber seus convidados e continuar a conversa em bares e restaurantes após as gravações.",
    image: "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2e231452b7b4c04317709_Snapshot_12.PNG"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Networking qualificado",
    description: "Nosso ambiente é um espaço vivo de uma comunidade frequentada por lideranças de diversas instituições do setor financeiro incluindo órgãos reguladores.",
    image: "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2e230421c47295bd3e4d3_WhatsApp%20Image%202024-02-06%20at%2011.14.40.jpeg"
  }
];

export function Features() {
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
    <section className="py-20" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="category-tag mb-4">NOSSA ESTRUTURA</div>
          <h2 className="text-4xl font-bold mb-4">
            A estrutura que seus convidados{' '}
            <span className="highlight-text">merecem</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ambiente cuidadosamente desenhado para proporcionar uma experiência incrível 
            aos participantes de todas as gravações
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-black text-white p-3 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}