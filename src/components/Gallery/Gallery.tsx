'use client'

import { useState, useRef } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const currentX = useRef(0)
  const isDragging = useRef(false)
  
  const images = [
    { src: '/images/slider/car1.jpg', alt: 'Банный чан из кедра на природе' },
    { src: '/images/slider/car2.jpg', alt: 'Деревянный чан с подогревом' },
    { src: '/images/slider/car3.jpg', alt: 'Семейный отдых в банном чане' },
    { src: '/images/slider/car4.jpg', alt: 'Банный чан зимой под снегом' },
    { src: '/images/slider/car5.jpg', alt: 'Романтический вечер в чане' },
    { src: '/images/slider/car6.jpg', alt: 'Банный чан с видом на лес' },
    { src: '/images/slider/car7.jpg', alt: 'Компания друзей в банном чане' },
    { src: '/images/slider/car8.jpg', alt: 'Банный чан на террасе дома' },
    { src: '/images/slider/car9.jpg', alt: 'Чан с гидромассажем и подсветкой' },
    { src: '/images/slider/car10.jpg', alt: 'Банный чан у озера на рассвете' },
    { src: '/images/slider/car11.jpg', alt: 'Элитный чан из японского кедра' },
    { src: '/images/slider/car12.jpg', alt: 'Банный чан с панорамным видом' },
    { src: '/images/slider/car13.jpg', alt: 'Чан для коммерческого использования' },
    { src: '/images/slider/car14.jpg', alt: 'Банный чан в горах на закате' },
    { src: '/images/slider/car15.jpg', alt: 'Современный чан с автоматикой' }
  ]

  const handleStart = (clientX: number) => {
    isDragging.current = true
    setIsPaused(true)
    startX.current = clientX
    currentX.current = clientX
  }

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !sliderRef.current) return
    
    const diff = startX.current - clientX
    sliderRef.current.style.transform = `translateX(calc(-33.333% - 8px - ${diff}px))`
  }

  const handleEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = ''
    }
    
    setTimeout(() => setIsPaused(false), 1000)
  }

  const handleImageClick = (imageSrc: string) => {
    if (!isDragging.current) {
      setSelectedImage(imageSrc)
    }
  }

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
            <div 
              ref={sliderRef}
              className={`flex ${isPaused ? '' : 'animate-infinite-scroll'} cursor-grab active:cursor-grabbing select-none`}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseMove={(e) => handleMove(e.clientX)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchMove={(e) => {
                e.preventDefault()
                handleMove(e.touches[0].clientX)
              }}
              onTouchEnd={handleEnd}
            >
              {/* Тройной набор изображений для полной бесконечности */}
              {[...images, ...images, ...images].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-96 h-72 mx-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleImageClick(image.src)}
                    draggable={false}
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
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-33.333% - 8px));
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }
      `}</style>
    </section>
  )
}