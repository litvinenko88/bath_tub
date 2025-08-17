export default function ProductCards() {
  const products = [
    {
      name: 'Банный чан "Алтай"',
      shape: '6 граней',
      capacity: '4 чел',
      diameter: 'Ø 1700мм',
      description: 'Компактный и удобный чан для уютной бани по выгодной цене. Идеален для небольшой компании или семейного отдыха. Долго сохраняет тепло благодаря форме и качественной стали.'
    },
    {
      name: 'Банный чан "Сибирь"',
      shape: '8 граней',
      capacity: '6 чел',
      diameter: 'Ø 1900мм',
      description: 'Просторная модель для комфортного отдыха в кругу друзей, которая позволяет наслаждаться процедурами в банном чане. Усиленная конструкция и оптимальный размер делают его выбором для тех, кто ценит надежность и удобство в наших банных чанах.'
    },
    {
      name: 'Банный чан "Тайга"',
      shape: '10 граней',
      capacity: '10 чел',
      diameter: 'Ø 2300мм',
      description: 'Вместительный чан для большой компании или коммерческого использования. Максимальный комфорт, долговечность и стильный дизайн – для истинных ценителей банных традиций.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Конфигурация банных чанов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Соберите и купите банный чан за несколько шагов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 font-mono text-left">
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-6 leading-tight">
                  {product.name}
                </h3>
                
                <div className="space-y-2 mb-8 text-black">
                  <div>Форма {product.shape}</div>
                  <div>Вместим. {product.capacity}</div>
                  <div>Диаметр {product.diameter}</div>
                </div>
                
                <div className="border-t border-gray-300 pt-6">
                  <button className="w-full bg-black text-white font-bold py-3 px-6 hover:bg-gray-800 transition-colors">
                    РАССЧИТАТЬ СТОИМОСТЬ
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