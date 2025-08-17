'use client'

import { useState, useEffect } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [currentReview, setCurrentReview] = useState(0)
  const [showAllFAQ, setShowAllFAQ] = useState(false)

  const faqs = [
    {
      question: "Чем банный чан отличается от обычной бани?",
      answer: "Что такое банный чан по выгодной цене? Банный чан сочетает преимущества парной и купели: вы паритесь в горячей воде на свежем воздухе, не перегревая голову, и наслаждаетесь процедурами в банном чане. Это более мягкое и полезное воздействие на организм, особенно в чанах из лиственницы."
    },
    {
      question: "Какой чан выбрать — на дровах или с электроподогревом?",
      answer: "Дровяной — аутентичная атмосфера, независимость от электричества, экономичность. Электрический — быстрый нагрев, точный контроль температуры, удобство в использовании."
    },
    {
      question: "Сколько человек вмещает сибирский банный чан?",
      answer: "Стандартные модели рассчитаны на 4-10 человек, но можно изготовить чан по индивидуальным размерам."
    },
    {
      question: "Можно ли использовать чан зимой?",
      answer: "Да! Зимнее парение в чане особенно популярно — контраст теплой воды и морозного воздуха дарит уникальные ощущения и укрепляет иммунитет."
    },
    {
      question: "Какие опции можно добавить к чанам?",
      answer: "Подстаканники и плавающие столики, деревянные сиденья и спинки, подсветку и гидромассажные системы, дополнительные ступени и поручни."
    },
    {
      question: "Где лучше установить уличную купель?",
      answer: "Рекомендуем: рядом с баней или домом (для удобства), на деревянном настиле или бетонном основании, наш чан отлично впишется в любую ландшафтную композицию вашего участка. В месте, защищенном от сильного ветра."
    },
    {
      question: "Как ухаживать за чанами из нержавейки?",
      answer: "Достаточно регулярно сливать воду и протирать поверхность, чтобы наши банные чаны служили долго. Нержавеющая сталь не требует особого ухода и служит десятилетиями."
    },
    {
      question: "Почему стоит купить именно сибирский банный чан?",
      answer: "Проверенные временем технологии обеспечивают высокую емкость и надежность чана. Адаптированы к суровому климату. Натуральные материалы и ручная сборка наших банных чан делают их уникальными. Уникальный дизайн."
    },
    {
      question: "Сколько стоит банный чан и где купить?",
      answer: "Цена зависит от размера, комплектации и типа нагрева. Актуальный каталог и контакты для заказа — на нашем сайте."
    }
  ]

  const reviews = [
    {
      title: "Лучшая покупка для семьи!",
      author: "Александр, Екатеринбург",
      text: "Купили чан на дровах – теперь каждые выходные как праздник, благодаря качеству банного чана от производителя! Дети обожают купаться, а мы с женой паримся под открытым небом с печкой. Зимой – вообще сказка: снег, пар, горячая вода в наших банных чанах. Собираемся докупить плавающий столик для чая."
    },
    {
      title: "SPA у себя на даче",
      author: "Ольга, Москва",
      text: "Заказала электрический чан с гидромассажем – теперь мое любимое место для релакса. Добавляю морскую соль и травы – эффект как в дорогом спа, но без лишних затрат. Ухаживать за нержавейкой – одно удовольствие."
    },
    {
      title: "Парение без духоты – это про чаны!",
      author: "Иван, Новосибирск",
      text: "Раньше терпеть не мог баню – голова сразу болела. В чане всё иначе: дышишь свежим воздухом, а тело прогревается равномерно. Печь снизу – гениально! Теперь только так и паримся."
    },
    {
      title: "Идеально для большой компании",
      author: "Светлана, Алтай",
      text: "Брали чан на 8 человек – помещаются все друзья по выгодной цене! Летом – купаемся, зимой – паримся. Особенно радует опция с подогревом сидений. Цена оправдана на 100%."
    },
    {
      title: "Лечение спины после травмы",
      author: "Дмитрий, Красноярск",
      text: "Врач рекомендовал прогревания. Купил чан для купания на дровах – через месяц боли ушли, и я рекомендую наши банные чаны! Вода + пар творят чудеса. Теперь советую всем как профилактику остеохондроза."
    },
    {
      title: "Долго выбирал – не ошибся",
      author: "Артем, Тюмень",
      text: "Сравнивал сибирские и алтайские чаны – остановился на этом банном чан от производителя, который оказался лучшим выбором. Качество сборки на высоте: ни течи, ни перекосов за 2 года, что подтверждают отзывы наших клиентов. Плюс бесплатная доставка до участка."
    },
    {
      title: "Романтика под звездами",
      author: "Анна и Максим, Сочи",
      text: "Установили чан с подсветкой – вечера стали волшебными. Пар, тепло, мерцающие огни… Даже в +10°C комфортно в чанах для бани! Советуем как альтернативу купели."
    },
    {
      title: "Для спортивного восстановления",
      author: "Сергей, Казань",
      text: "После тренировок греюсь в чане – мышцы восстанавливаются в разы быстрее, особенно когда я парюсь в банном чане на открытом воздухе. Дополнил его ступенями для удобного захода. Отличная замена бассейну по выгодной цене! Наш чан отлично подходит для незабываемого отдыха с друзьями."
    },
    {
      title: "Подарок родителям",
      author: "Елена, Челябинск",
      text: "Купила родителям уличную купель с электроподогревом. Мама в восторге: вода всегда 40°C, управление простое, благодаря чанам из нержавеющей стали. Папа сам собрал за день – прилагалась подробная инструкция."
    },
    {
      title: "Настоящий сибирский колорит",
      author: "Вадим, Иркутск",
      text: "Живу в частном доме – чан стал центром отдыха. С друзьями паримся с вениками, потом ныряем в сугроб. Соседи просят сделать такой же!"
    }
  ]

  const visibleFAQs = showAllFAQ ? faqs : faqs.slice(0, 5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* FAQ */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Часто задаваемые <span className="text-orange-500">вопросы</span>
            </h2>
            
            <div className="space-y-4">
              {visibleFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-6 h-6 text-orange-500 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              
              {!showAllFAQ ? (
                <button
                  onClick={() => setShowAllFAQ(true)}
                  className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 mt-4 underline"
                >
                  Посмотреть все
                </button>
              ) : (
                <button
                  onClick={() => setShowAllFAQ(false)}
                  className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300 mt-4 underline"
                >
                  Свернуть
                </button>
              )}
            </div>
          </div>

          {/* Отзывы слайдер */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              <span className="text-orange-500">Отзывы</span> клиентов
            </h2>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 min-h-[400px] flex flex-col justify-between">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {reviews[currentReview].author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {reviews[currentReview].title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {reviews[currentReview].author}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    "{reviews[currentReview].text}"
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  {/* Звезды */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Индикаторы */}
                  <div className="flex space-x-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentReview ? 'bg-orange-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}