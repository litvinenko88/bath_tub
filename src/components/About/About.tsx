export default function About() {
  const reasons = [
    {
      title: "Настоящее Сибирское Качество",
      description: "Используем толстостенную нержавейку AISI 304 – не ржавеет, не деформируется, служит 20+ лет."
    },
    {
      title: "2 Типа Подогрева – Под Любые Условия",
      description: "Дровяные печи – аутентичный жар и экономия. Электрические ТЭНы – нагрев до 40°C за 1 час."
    },
    {
      title: "Умные Опции \"Под Ключ\"",
      description: "Гидромассажные форсунки, LED-подсветка, деревянные столики, ступени с противоскользящим покрытием."
    },
    {
      title: "Польза для Здоровья",
      description: "Помогают при болях в спине и суставах, простудах, стрессе и бессоннице."
    },
    {
      title: "Готовые Решения для Бизнеса",
      description: "Оборудуем спа-комплексы, глэмпинги, эко-курорты и частные бани премиум-класса."
    },
    {
      title: "Полный Сервис",
      description: "Доставка и монтаж по всей России. Гарантия 5 лет на швы и печи."
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* О компании */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            О <span className="text-orange-500">компании</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Мы – производитель настоящих сибирских банных чанов с 2010 года. Наша миссия – дарить людям уникальный опыт парения, объединяющий пользу для здоровья и удовольствие от отдыха на природе.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Каждый чан – это:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Ручная сборка мастерами с 10+ летним опытом</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Сертифицированные материалы – нержавеющая сталь, термостойкая древесина</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Адаптация под любой климат – от -40°C до +35°C</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">Индивидуальный подход – от стандартных моделей до эксклюзивных проектов</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 причин выбрать нас */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            6 Причин <span className="text-orange-500">Выбрать Нас</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{reason.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Как мы работаем */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Как Мы <span className="text-orange-500">Работаем?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
              <h4 className="font-bold text-slate-900 mb-2">Консультация</h4>
              <p className="text-gray-600 text-sm">Поможем выбрать модель под ваш бюджет</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
              <h4 className="font-bold text-slate-900 mb-2">Производство</h4>
              <p className="text-gray-600 text-sm">14-21 день или готовые модели со склада</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
              <h4 className="font-bold text-slate-900 mb-2">Доставка</h4>
              <p className="text-gray-600 text-sm">Собственные бригады монтажников</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
              <h4 className="font-bold text-slate-900 mb-2">Обучение</h4>
              <p className="text-gray-600 text-sm">Инструктаж по эксплуатации</p>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Хотите такой же чан?</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+7 (996) 417-90-01</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>mix-trades@mail.ru</span>
              </div>
            </div>
            <p className="mt-6 text-orange-100">Или оставьте заявку на сайте – сделаем расчет за 1 час!</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Контактная информация</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-slate-900">ООО «НОВО»</h4>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Адрес:</h4>
                <p className="text-gray-600">355035, Ставропольский край, г. Ставрополь, пр-кт Кулакова, д. 18, офис 116</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Реквизиты:</h4>
                <p className="text-gray-600">ИНН/КПП: 2635249770 / 263501001</p>
                <p className="text-gray-600">ОГРН: 1212600007311</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}