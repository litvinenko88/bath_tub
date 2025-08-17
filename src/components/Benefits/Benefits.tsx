export default function Benefits() {
  const benefits = [
    "Настоящее парение – эффект русской бани под открытым небом по выгодной цене",
    "Эксклюзивные wellness-ритуалы – релакс и оздоровление в одном месте",
    "Польза для организма – укрепление иммунитета и улучшение самочувствия",
    "Глубокое расслабление – восстановление энергии после тяжёлого дня",
    "Идеальный баланс – можно совмещать с тренировками и активным отдыхом",
    "Освежающее купание – альтернатива традиционной купели с комфортной температурой"
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок и описание */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Банный Чан – ваш источник <span className="text-orange-500">здоровья и удовольствия</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Мы производим банные чаны с нагревом – дровяным и электрическим, используя лиственницу для долговечности. 
            Каждое изделие можно дополнить множеством полезных аксессуаров под ваши потребности.
          </p>
        </div>

        {/* Основной контент */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl border border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Почему стоит выбрать <span className="text-orange-500">наш чан?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group flex items-start p-4 rounded-xl hover:bg-orange-50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}