import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Professional Røde microphones",
  "Acoustically treated space",
  "4K Sony cameras",
  "Professional lighting setup",
  "Multiple guest capacity",
  "Live streaming equipment",
  "Recording software included",
  "Technical support available"
];

export function Studio() {
  return (
    <section id="studio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold">State-of-the-Art Studio</h2>
            <p className="mt-6 text-lg text-gray-600">
              Our professionally designed studio space is equipped with everything you need to create high-quality content. From podcast recording to video production, we've got you covered.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <img 
              src="https://assets-global.website-files.com/64f1c6f1bc4f5f3c1b3f6b52/64f1c6f1bc4f5f3c1b3f6b89_Studio%20Room.webp"
              alt="Studio Interior"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://assets-global.website-files.com/64f1c6f1bc4f5f3c1b3f6b52/64f1c6f1bc4f5f3c1b3f6b88_Equipment.webp"
                alt="Studio Equipment"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://assets-global.website-files.com/64f1c6f1bc4f5f3c1b3f6b52/64f1c6f1bc4f5f3c1b3f6b8b_Video%20Production.webp"
                alt="Video Production Setup"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}