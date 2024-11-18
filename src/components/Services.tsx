import React from 'react';
import { Mic, Video, Users, Headphones } from 'lucide-react';

const services = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Podcast Recording",
    description: "Professional recording studio with top-tier equipment for crystal-clear audio quality"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production",
    description: "Full video production services with 4K cameras and professional lighting"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Live Streaming",
    description: "Professional live streaming setup for reaching your audience in real-time"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Post Production",
    description: "Expert editing, mixing, and mastering services for polished final content"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
          Everything you need to create professional content, all under one roof
        </p>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition group">
              <div className="bg-black text-white w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}