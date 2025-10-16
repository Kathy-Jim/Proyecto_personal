"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

// 🖼️ Carrusel de imágenes
const carouselImages = [
  { id: "1", src: "/memories/1.jpg", title: "Memoria 1" },
  { id: "2", src: "/memories/2.jpg", title: "Memoria 2" },
  { id: "3", src: "/memories/3.webp", title: "Memoria 3" },
  { id: "4", src: "/memories/4.jpg", title: "Memoria 4" },
  { id: "5", src: "/memories/5.jpg", title: "Memoria 5" },
  { id: "6", src: "/memories/6.jpg", title: "Memoria 6" },
  { id: "7", src: "/memories/7.jpg", title: "Memoria 7" },
  { id: "8", src: "/memories/8.jpg", title: "Memoria 8" },
  { id: "9", src: "/memories/9.jpg", title: "Memoria 9" },
  { id: "10", src: "/memories/10.jpg", title: "Memoria 10" },
  { id: "11", src: "/memories/11.jpg", title: "Memoria 11" },
  { id: "12", src: "/memories/12.jpg", title: "Memoria 12" },
  { id: "13", src: "/memories/13.jpg", title: "Memoria 13" },
  { id: "14", src: "/memories/14.jpg", title: "Memoria 14" },
  { id: "15", src: "/memories/15.jpg", title: "Memoria 15" },
];

// 🖼️ Galería de imágenes (redirigen a páginas con videos)
const galleryImages = [
  { id: "1", src: "/gallery/1.jpg", title: "Song 1" },
  { id: "2", src: "/gallery/2.jpg", title: "Song 2" },
  { id: "3", src: "/gallery/3.webp", title: "Song 3" },
  { id: "4", src: "/gallery/4.jpg", title: "Song 4" },
  { id: "5", src: "/gallery/5.jpg", title: "Song 5" },
  { id: "6", src: "/gallery/6.jpg", title: "Song 6" },
  { id: "7", src: "/gallery/7.jpg", title: "Song 7" },
  { id: "8", src: "/gallery/8.jpg", title: "Song 8" },
  { id: "9", src: "/gallery/9.jpg", title: "Song 9" },
  { id: "10", src: "/gallery/10.jpg", title: "Song 10" },
  { id: "11", src: "/gallery/11.jpg", title: "Song 11" },
  { id: "12", src: "/gallery/12.jpg", title: "Song 12" },
  { id: "13", src: "/gallery/13.jpg", title: "Song 13" },
  { id: "14", src: "/gallery/14.jpg", title: "Song 14" },
  { id: "15", src: "/gallery/15.jpg", title: "Song 15" },
  { id: "16", src: "/gallery/16.jpg", title: "Song 16" },
  { id: "17", src: "/gallery/17.jpeg", title: "Song 17" },
  { id: "18", src: "/gallery/18.jpeg", title: "Song 18" },
  { id: "19", src: "/gallery/19.jpeg", title: "Song 19" },
  { id: "20", src: "/gallery/20.jpeg", title: "Song 20" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 6, spacing: 15 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const router = useRouter();

  // Botones del carrusel
  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-16">
      <h1 className="text-4xl font-bold text-gray-800">
        Our First Anniversary :3
      </h1>

      {/* 🌠 Carrusel */}
      <section className="relative w-[90%] max-w-4xl">
        <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden">
  {carouselImages.map((img) => (
    <div
      key={img.id}
      className="keen-slider__slide flex justify-center cursor-pointer"
      onClick={() => router.push(`/memories/${img.id}`)}
    >
      <Image
        src={img.src}
        alt={img.title}
        width={800}
        height={500}
        className="rounded-2xl shadow-lg object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  ))}
</div>



        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition"
        >
          ▶
        </button>
      </section>

      {/* 🖼️ Galería cuadrada */}
      <section className="w-full max-w-6xl">
        {/* 🔹 Título con mismo estilo que el del carrusel */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Songs :3
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => router.push(`/videos/${img.id}`)}
              className="cursor-pointer group"
            >
              {/* 🔳 Recuadro cuadrado */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-2 text-center text-gray-700 font-medium text-sm sm:text-base">
                {img.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}