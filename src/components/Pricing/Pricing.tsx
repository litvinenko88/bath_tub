import Button from '../Button'

export default function Pricing() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0">
        <img 
          src="/images/shanxxx.jpg" 
          alt="Банный чан - стоимость и конфигурации"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Контент */}
      <div className="relative z-10 min-h-[50vh] py-16 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center sm:text-left max-w-4xl">
            {/* Бейдж */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-sm font-medium text-white animate-fade-in-up">
              <svg className="w-4 h-4 text-orange-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
              </svg>
              Индивидуальная стоимость
            </div>
            
            {/* Заголовок */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Сколько стоит
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                банный чан?
              </span>
            </h2>
            
            {/* Описание */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto sm:mx-0 leading-relaxed animate-fade-in-up animation-delay-400">
              Цена будет зависеть от выбранной конфигурации. Банный чан может отличаться по размеру, типу установки и варианту отопления, включая модели из кедра, а также использоваться для процедур в банном чане на открытом воздухе.
            </p>
            
            {/* Кнопка */}
            <div className="animate-fade-in-up animation-delay-600">
              <Button variant="primary" className="transform hover:scale-105 transition-all duration-300">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}