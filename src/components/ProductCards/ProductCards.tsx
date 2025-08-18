'use client'

import { useState } from 'react'
import Image from 'next/image'
import Quiz from '../Quiz'

export default function ProductCards() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [selectedProductSize, setSelectedProductSize] = useState<string | undefined>(undefined)
  const products = [
    {
      id: 'size-6',
      name: 'Банный чан "Алтай"',
      shape: '6 граней',
      capacity: '4 чел',
      capacityNumber: 4,
      diameter: 'Ø 1700мм',
      description: 'Компактный и удобный чан для уютной бани по выгодной цене. Идеален для небольшой компании или семейного отдыха. Долго сохраняет тепло благодаря форме и качественной стали.',
      mainImage: '/images/products/shan 1.jpg',
      specImage: '/images/products/shan 1.1.jpg'
    },
    {
      id: 'size-8',
      name: 'Банный чан "Сибирь"',
      shape: '8 граней',
      capacity: '6 чел',
      capacityNumber: 6,
      diameter: 'Ø 1900мм',
      description: 'Просторная модель для комфортного отдыха в кругу друзей, которая позволяет наслаждаться процедурами в банном чане. Усиленная конструкция и оптимальный размер делают его выбором для тех, кто ценит надежность и удобство в наших банных чанах.',
      mainImage: '/images/products/shan 2.jpg',
      specImage: '/images/products/shan 2.2.jpg'
    },
    {
      id: 'size-10',
      name: 'Банный чан "Тайга"',
      shape: '10 граней',
      capacity: '10 чел',
      capacityNumber: 10,
      diameter: 'Ø 2300мм',
      description: 'Вместительный чан для большой компании или коммерческого использования. Максимальный комфорт, долговечность и стильный дизайн – для истинных ценителей банных традиций.',
      mainImage: '/images/products/shan 3.jpg',
      specImage: '/images/products/shan 3.3.jpg'
    }
  ]

  const handleProductClick = (productId: string) => {
    setSelectedProductSize(productId)
    setIsQuizOpen(true)
  }

  const handleQuizClose = () => {
    setIsQuizOpen(false)
    setSelectedProductSize(undefined)
  }

  const PersonIcon = () => (
    <svg width="10" height="10" viewBox="0 0 512 512" className="fill-white">
      <path d="M359.51,367.614c-19.106-7.148-40.877-18.276-40.877-32.676c0-9.533,0-21.444,0-37.782
        c6.996-19.393,17.51-20.781,22.768-50.546c12.254-4.379,19.258-11.384,28.009-42.026c6.574-23.064-3.112-29.254-9.382-30.905
        c0.128-1.229,0.256-2.466,0.359-3.917c2.369-34.543,22.425-137.078-47.012-149.332c-18.38-14.296-30.043-20.774-69.437-18.38
        C219.001,2.042,200.046,7.547,173.632,0c-35.245,29.565-25.561,126.66-20.63,173.504c-6.199,1.388-16.889,7.148-10.052,31.08
        c8.744,30.641,15.748,37.646,28.001,42.026c5.258,29.765,21.252,39.322,22.417,50.546c0,16.338,0,28.248,0,37.782
        c0,14.4-23.494,26.55-40.877,32.676C119.058,379.397,25.911,414.275,34.073,512h443.856
        C486.09,414.275,392.712,380.035,359.51,367.614z"/>
    </svg>
  )

  return (
    <>
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Конфигурация банных чанов
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Соберите и купите банный чан за несколько шагов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-start">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg shadow-lg border border-gray-100 font-mono text-left overflow-hidden transition-all duration-500 hover:shadow-2xl animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleProductClick(product.id)}
            >
              {/* Основное изображение */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-lg">
                <Image 
                  src={product.mainImage} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Иконки вместимости */}
                <div className="absolute top-2 left-2 bg-gray-800/60 backdrop-blur-sm rounded px-2 py-1">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-white font-medium">{product.capacityNumber}</span>
                    {Array.from({ length: product.capacityNumber }, (_, i) => (
                      <PersonIcon key={i} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {product.name}
                </h3>
                
                <div className="flex items-start justify-between">
                  <div className="space-y-2 text-gray-700 flex-1 text-sm sm:text-base">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>Форма {product.shape}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>Вместим. {product.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>Диаметр {product.diameter}</span>
                    </div>
                  </div>
                  
                  {/* Изображение характеристик */}
                  <div className="ml-4 w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <Image 
                      src={product.specImage} 
                      alt={`Схема ${product.name}`}
                      className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      width={80}
                      height={80}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              {/* Кнопка с отступом */}
              <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out">
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4">
                  <button 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 sm:py-4 px-6 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProductClick(product.id)
                    }}
                  >
                    <span className="text-sm sm:text-base">РАССЧИТАТЬ СТОИМОСТЬ</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <Quiz 
      isOpen={isQuizOpen} 
      onClose={handleQuizClose}
      preselectedSize={selectedProductSize}
    />
    </>
  )
}