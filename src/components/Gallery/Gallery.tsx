'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const images = [
    '/images/slider/car1.jpg',
    '/images/slider/car2.jpg',
    '/images/slider/car3.jpg',
    '/images/slider/car4.jpg',
    '/images/slider/car5.jpg',
    '/images/slider/car6.jpg',
    '/images/slider/car7.jpg',
    '/images/slider/car8.jpg',
    '/images/slider/car9.jpg'
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Греем не только <span className="text-orange-500">тела</span>, но и <span className="text-orange-500">сердца</span>!
          </h2>
        </div>

        {/* Слайдер */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex animate-slide">
              {/* Тройной набор изображений для бесшовности */}
              {[...images, ...images, ...images].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-96 h-72 mx-3">
                  <img
                    src={image}
                    alt={`Банный чан ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Градиентные маски по краям */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Модальное окно для полноэкранного просмотра */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img
              src={selectedImage}
              alt="Банный чан"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-slide {
          animation: slide 45s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}