import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  { 
    id: 'WWfJBvdUPI8',
    thumbnail: 'https://i.ytimg.com/vi/WWfJBvdUPI8/maxresdefault.jpg'
  },
  { 
    id: '6dWeymUVSvo',
    thumbnail: 'https://i.ytimg.com/vi/6dWeymUVSvo/maxresdefault.jpg'
  },
  { 
    id: 'xpNEoiUS4Ss',
    thumbnail: 'https://i.ytimg.com/vi/xpNEoiUS4Ss/maxresdefault.jpg'
  },
  { 
    id: 'JhyZ8cIuI1U',
    thumbnail: 'https://i.ytimg.com/vi/JhyZ8cIuI1U/maxresdefault.jpg'
  },
  { 
    id: 'oZRCtvUNC5A',
    thumbnail: 'https://i.ytimg.com/vi/oZRCtvUNC5A/maxresdefault.jpg'
  },
  { 
    id: 'kZcrEoO1dSQ',
    thumbnail: 'https://i.ytimg.com/vi/kZcrEoO1dSQ/maxresdefault.jpg'
  },
  { 
    id: 'hsCrzaLPRjg',
    thumbnail: 'https://i.ytimg.com/vi/hsCrzaLPRjg/maxresdefault.jpg'
  },
  { 
    id: 'qgJxaihQW24',
    thumbnail: 'https://i.ytimg.com/vi/qgJxaihQW24/maxresdefault.jpg'
  },
  { 
    id: 's7CD4c42r3I',
    thumbnail: 'https://i.ytimg.com/vi/s7CD4c42r3I/maxresdefault.jpg'
  }
];

export function VideoSection() {
  return (
    <section className="py-20 bg-gray-900" id="videos">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="category-tag mb-6">NOSSAS PRODUÇÕES</div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Veja na prática uma produção Let's
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group relative overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="aspect-video">
                <img
                  src={video.thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-yellow-300 p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}