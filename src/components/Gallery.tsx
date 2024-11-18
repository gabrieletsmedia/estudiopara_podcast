import React from 'react';

const galleryImages = [
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c55912ccfd5e3d7dbe3efe_Snapshot%20(7).png",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c559121a9ce0d4fe1a10dd_Snapshot_9%20CLEBER%20MORAIS.png",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c55912315c58501ca41a75_Snapshot%20(9).png",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c55912f079472bdfd7095b_Snapshot_7%20(2).png",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c55b1c14393650b9f794e9_DSC_2455%20(1)%20(1).jpg",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c563b600b63d6091170fde_Design%20sem%20nome%20(6).png"
];

export function Gallery() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Conteúdos em diferentes formatos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-video rounded-xl overflow-hidden">
              <img
                src={image}
                alt={`Studio content ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}