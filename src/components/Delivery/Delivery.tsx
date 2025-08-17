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
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Как доставляем банные чаны
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            по всей России и СНГ
          </p>
          <p className="text-base text-gray-500 max-w-4xl mx-auto mt-4">
            Мы доставляем банные чаны быстро, надежно и с полной страховкой груза, включая собственное производство
          </p>
        </div>

        {/* Способы доставки */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">Способы доставки</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{method.title}</h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Сроки и стоимость */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Сроки */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">⏰</span>
              Сроки доставки
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">По России:</span>
                <span className="font-semibold">5–14 дней</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">По СНГ:</span>
                <span className="font-semibold">7–20 дней</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Экспресс-доставка:</span>
                <span className="font-semibold">3–5 дней (+25%)</span>
              </div>
            </div>
          </div>

          {/* Стоимость */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">💰</span>
              Стоимость доставки
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">По Ставрополю:</span>
                <span className="font-semibold text-green-600">Бесплатно</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">По России:</span>
                <span className="font-semibold">от 5 000 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">В СНГ:</span>
                <span className="font-semibold">Индивидуально</span>
              </div>
            </div>
          </div>
        </div>

        {/* Этапы отправки */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">Как происходит отправка?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-orange-100 rounded-lg p-6 h-full">
                  <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full font-bold text-sm mb-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Разгрузка и установка</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Самостоятельная разгрузка (кран-манипулятор или 4 человека)</li>
              <li>• Монтаж "под ключ" (+15 000 ₽ – наши специалисты привезут, соберут и запустят)</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Важно знать</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Груз застрахован на 100% стоимости</li>
              <li>• Проверяйте целостность упаковки при получении</li>
              <li>• Доступна примерка перед отправкой (по запросу)</li>
            </ul>
          </div>
        </div>

        {/* Контакты */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Остались вопросы?</h3>
          <p className="mb-4">Поможем подобрать оптимальный вариант доставки!</p>
          <a href="tel:+79964179001" className="inline-flex items-center bg-white text-orange-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <span className="mr-2">📞</span>
            +7 (996) 417-90-01
          </a>
        </div>
      </div>
    </section>
  )
}