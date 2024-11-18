import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const partners = [
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/64bc251d913366cc34fea6c9_Design%20sem%20nome%20(5).svg",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c569381f77e162be5adb98_empresas%20(1).png",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c56938bcebcfa17ac7c3ee_empresas.png",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/64bebd74bdaf0049ba493e1a_on%20(5).png",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/64bc251d292b8b8352591a3e_Design%20sem%20nome%20(2).svg",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/64bc251c0a57a73047f3def6_Design%20sem%20nome%20(6).svg",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/64bc251d40139f5a5747e673_Design%20sem%20nome%20(7).svg",
  "https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/64bc251c082c3534bd0e04f3_Design%20sem%20nome.svg"
];

export function Partners() {
  return (
    <section className="py-20 bg-white" id="partners">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="category-tag mb-4">CLIENTES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Com quem já trabalhamos 🤝
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="partners-swiper"
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-40 p-4">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-auto max-h-full object-contain"
                  style={{ width: '312.5px' }} // Increased by 25% from 250px
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}