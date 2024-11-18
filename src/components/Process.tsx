import React, { useState } from 'react';
import { Mic, Edit, Share2, Lightbulb } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "planejamento",
    description: "Apoiamos nossos clientes no desenho da estratégia completa de seus programas, desde o roteiro até o relacionamento com os convidados. Seu sucesso é o nosso sucesso.",
    icon: <Lightbulb className="w-8 h-8" />,
    bgImage: "https://letsmediahub.com.br/wp-content/uploads/2024/10/Copia-de-Snapshot_7-1.png"
  },
  {
    number: "2",
    title: "gravação",
    description: "Com tudo pronto, você tem acesso liberado para reservar os horários em nossa agenda e trazer seus convidados.",
    icon: <Mic className="w-8 h-8" />,
    bgImage: "https://letsmediahub.com.br/wp-content/uploads/2024/10/lets-media-fintouch-24-redes-7.jpg"
  },
  {
    number: "3",
    title: "edição",
    description: "Editamos o seu episódio de ponta a ponta. Com os melhores trechos e cortes que lhe renderão bons conteúdos para redes sociais em diferentes formatos.",
    icon: <Edit className="w-8 h-8" />,
    bgImage: "https://letsmediahub.com.br/wp-content/uploads/2024/10/IMG_0777-scaled.jpg"
  },
  {
    number: "4",
    title: "distribuição",
    description: "Gerenciamos a distribuição do seu programa nas principais plataformas, incluindo Youtube, Spotify, Apple e Google Podcasts, acompanhando métricas da audiência.",
    icon: <Share2 className="w-8 h-8" />,
    bgImage: "https://letsmediahub.com.br/wp-content/uploads/2024/10/DSC_2553-1-scaled.jpg"
  }
];

export function Process() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = steps.length - 1;

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <section className="py-20 bg-white" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="category-tag">GRAVANDO</div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Seu podcast online em 4 passos
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Cuidamos de toda a produção e sua única preocupação é gravar o seu conteúdo.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
            {/* Progress Bar */}
            <div className="relative h-[350px]">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200">
                <div 
                  className="w-full bg-yellow-300 transition-all duration-500 ease-in-out"
                  style={{ height: `${(currentStep / stepsCount) * 100}%` }}
                ></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-between">
                {steps.map((step, index) => {
                  const isActive = index <= currentStep;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      className={`flex items-center gap-4 transition-all duration-300 group ${
                        isActive ? 'text-black' : 'text-gray-400'
                      }`}
                    >
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm 
                          transition-all duration-300 cursor-pointer
                          ${isActive ? 'bg-yellow-300' : 'bg-gray-200'} 
                          hover:shadow-lg hover:scale-110 hover:bg-yellow-300 hover:text-black`}
                      >
                        {step.number}
                      </div>
                      <span className="font-semibold uppercase text-sm group-hover:text-black">
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cards Container */}
            <div className="relative h-[350px] overflow-hidden rounded-xl">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    currentStep === index 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentStep
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="relative h-full">
                    <img 
                      src={step.bgImage}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute top-6 left-6">
                      <div className="bg-yellow-300 p-3 rounded-xl">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-xl">
                          {step.number}
                        </div>
                        <h3 className="text-3xl font-bold text-white uppercase">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-white/90 text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}