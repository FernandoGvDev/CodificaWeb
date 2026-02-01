'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ExternalLink, X } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { projects } from '../../data/projects';

export default function Portfolio() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setFullscreenImage(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openFullscreen = (image: string) => {
    setFullscreenImage(image);
    window.history.pushState({ fullscreen: true }, '');
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    window.history.back();
  };

  return (
    <section
      className="relative py-24 px-6"
      style={{ backgroundColor: '#e5e7eb' }}
    >
      {/* Pontos de luz */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-16 right-10 w-72 h-72 bg-purple-400/5 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Portfólio
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Sites Criados
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          centeredSlides
          navigation
          pagination={{ clickable: true }}
          spaceBetween={32}
          className="bg-[#0f172a] rounded-3xl shadow-xl overflow-visible"
          breakpoints={{
            0: { slidesPerView: 1.05 },
            640: { slidesPerView: 1.1 },
            1024: { slidesPerView: 1.2 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col items-center mt-4">
                
                {/* IMAGEM */}
                <button
                  onClick={() => openFullscreen(project.image)}
                  className="relative w-full 
                    h-[200px] sm:h-[260px] md:h-[420px]
                    bg-neutral-900 rounded-3xl overflow-hidden shadow-xl mb-4
                    focus:outline-none"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover border-2 border-gray-200"
                  />
                </button>

                {/* TEXTO + BOTÃO */}
                <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 px-2">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">
                      {project.name}
                    </h3>
                    <p className="text-gray-100 mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 text-gray-200 font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 transition w-full md:w-auto justify-center"
                  >
                    Ver online
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* FULLSCREEN MOBILE */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white z-10"
          >
            <X size={28} />
          </button>

          <img
            src={fullscreenImage}
            alt="Projeto em tela cheia"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
