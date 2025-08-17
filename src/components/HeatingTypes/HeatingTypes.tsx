export default function HeatingTypes() {
  const heatingTypes = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Дровяной подогрев",
      description: "Прямое подключение к чану обеспечивает мгновенный нагрев воды с минимальным расходом древесины, что делает его идеальным для купания с подогревом.",
      advantages: [
        "Высокая скорость нагрева при использовании чаши для купания с подогревом",
        "Экономичное использование дров",
        "Аутентичная атмосфера с живым огнем"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>
      ),
      title: "Открытый костровой нагрев",
      description: "Простое и зрелищное решение по доступной цене.",
      advantages: [
        "Эстетика открытого пламени",
        "Лёгкость в эксплуатации обеспечивает высокую емкость чана",
        "Бюджетный вариант"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Газовая система нагрева",
      description: "Современный и практичный способ без лишних хлопот, включая установку лестницы для удобства и печку для подогрева на дровах.",
      advantages: [
        "Быстрый нагрев без копоти по выгодной цене",
        "Чистота – отсутствие золы и сажи",
        "Минимальное выделение дыма"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Электронагрев с фильтрацией",
      description: "Идеально, когда нет возможности использовать дрова или газ, наши банные чаны предлагают альтернативу.",
      advantages: [
        "Комфортное управление температурой",
        "Встроенная система очистки воды",
        "Бесшумная и экологичная работа по выгодной цене"
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Типы <span className="text-orange-500">нагрева</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Каждый вариант нагрева адаптирован под разные потребности, сохраняя главное – удовольствие от банного ритуала!
          </p>
        </div>

        {/* Карточки типов нагрева */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {heatingTypes.map((type, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Иконка и заголовок */}
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-orange-600 mr-2">{index + 1}.</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                        {type.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Описание */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {type.description}
                </p>
                
                {/* Преимущества */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                    Преимущества:
                  </h4>
                  <div className="space-y-2">
                    {type.advantages.map((advantage, advIndex) => (
                      <div key={advIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700 text-sm sm:text-base">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}