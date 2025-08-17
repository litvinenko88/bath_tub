export default function Delivery() {
  const deliveryMethods = [
    {
      icon: "🚛",
      title: "Автотранспортом",
      description: "Надежные перевозчики (Деловые Линии, ПЭК, КИТ) с фиксацией груза"
    },
    {
      icon: "🚂",
      title: "Ж/Д перевозки",
      description: "Для крупных заказов (от 2 чанов) или дальних регионов"
    },
    {
      icon: "🏠",
      title: "Собственная логистика",
      description: "По Ставропольскому краю и ЮФО (бесплатно при заказе от 300 000 ₽)"
    }
  ]

  const deliverySteps = [
    "После оплаты упаковываем чан в прочный деревянный каркас и защитную пленку",
    "Закрепляем на паллеты и передаем в транспортную компанию",
    "Вы получаете трек-номер для отслеживания",
    "Доставка до вашего адреса или терминала ТК"
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Как доставляем банные чаны
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            по всей России и СНГ
          </p>
          <p className="text-base text-gray-500 max-w-4xl mx-auto">
            Мы доставляем банные чаны быстро, надежно и с полной страховкой груза
          </p>
        </div>

        {/* Способы доставки */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="group bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{method.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Сроки и стоимость */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Сроки */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8 transform transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-xl">⏰</span>
              Сроки доставки
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">По России:</span>
                <span className="font-bold text-orange-600">5–14 дней</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">По СНГ:</span>
                <span className="font-bold text-orange-600">7–20 дней</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Экспресс:</span>
                <span className="font-bold text-orange-600">3–5 дней (+25%)</span>
              </div>
            </div>
          </div>

          {/* Стоимость */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8 transform transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 text-xl">💰</span>
              Стоимость доставки
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">По Ставрополю:</span>
                <span className="font-bold text-green-600">Бесплатно</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">По России:</span>
                <span className="font-bold text-gray-900">от 5 000 ₽</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">В СНГ:</span>
                <span className="font-bold text-gray-900">Индивидуально</span>
              </div>
            </div>
          </div>
        </div>

        {/* Этапы отправки */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">Как происходит отправка?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, index) => (
              <div key={index} className="group bg-white rounded-lg shadow-lg border border-gray-100 p-6 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: `${(index + 3) * 200}ms` }}>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8 transform transition-all duration-500 hover:shadow-xl">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">🔧</span>
              Разгрузка и установка
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm sm:text-base">Самостоятельная разгрузка (кран-манипулятор или 4 человека)</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm sm:text-base">Монтаж "под ключ" (+15 000 ₽ – наши специалисты привезут, соберут и запустят)</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8 transform transition-all duration-500 hover:shadow-xl">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">✅</span>
              Важно знать
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm sm:text-base">Груз застрахован на 100% стоимости</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm sm:text-base">Проверяйте целостность упаковки при получении</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm sm:text-base">Доступна примерка перед отправкой (по запросу)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-2xl p-8 sm:p-12 text-white transform transition-all duration-500 hover:scale-105">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Остались вопросы?</h3>
          <p className="mb-6 text-orange-100">Поможем подобрать оптимальный вариант доставки!</p>
          <a href="tel:+79964179001" className="inline-flex items-center bg-white text-orange-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span className="mr-2 text-xl">📞</span>
            <span className="text-base sm:text-lg">+7 (996) 417-90-01</span>
          </a>
        </div>
      </div>
    </section>
  )
}