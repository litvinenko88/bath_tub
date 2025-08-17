'use client'

export default function Gallery() {
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
              {/* Первый набор изображений */}
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-80 h-60 mx-2">
                  <img
                    src={image}
                    alt={`Банный чан ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
              {/* Дублированный набор для бесконечности */}
              {images.map((image, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 h-60 mx-2">
                  <img
                    src={image}
                    alt={`Банный чан ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
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

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}