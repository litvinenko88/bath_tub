export default function ProductCards() {
  const products = [
    {
      name: 'Банный чан "Алтай"',
      shape: '6 граней',
      capacity: '4 чел',
      diameter: 'Ø 1700мм',
      description: 'Компактный и удобный чан для уютной бани по выгодной цене. Идеален для небольшой компании или семейного отдыха. Долго сохраняет тепло благодаря форме и качественной стали.',
      mainImage: '/images/products/shan 1.jpg',
      specImage: '/images/products/shan 1.1.jpg'
    },
    {
      name: 'Банный чан "Сибирь"',
      shape: '8 граней',
      capacity: '6 чел',
      diameter: 'Ø 1900мм',
      description: 'Просторная модель для комфортного отдыха в кругу друзей, которая позволяет наслаждаться процедурами в банном чане. Усиленная конструкция и оптимальный размер делают его выбором для тех, кто ценит надежность и удобство в наших банных чанах.',
      mainImage: '/images/products/shan 2.jpg',
      specImage: '/images/products/shan 2.2.jpg'
    },
    {
      name: 'Банный чан "Тайга"',
      shape: '10 граней',
      capacity: '10 чел',
      diameter: 'Ø 2300мм',
      description: 'Вместительный чан для большой компании или коммерческого использования. Максимальный комфорт, долговечность и стильный дизайн – для истинных ценителей банных традиций.',
      mainImage: '/images/products/shan 3.jpg',
      specImage: '/images/products/shan 3.3.jpg'
    }
  ]

  return (
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
              className="group bg-white rounded-lg shadow-lg border border-gray-100 font-mono text-left overflow-hidden transition-all duration-500 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Основное изображение */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-lg">
                <img 
                  src={product.mainImage} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    <img 
                      src={product.specImage} 
                      alt={`Схема ${product.name}`}
                      className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              {/* Кнопка с отступом */}
              <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out">
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 sm:py-4 px-6 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <span className="text-sm sm:text-base">РАССЧИТАТЬ СТОИМОСТЬ</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}