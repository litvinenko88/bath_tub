import Button from '../Button'

export default function Promo() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0">
        <img 
          src="/images/akcia.jpg" 
          alt="Акция на банные чаны"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Контент */}
      <div className="relative z-10 min-h-[60vh] py-16 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center sm:text-left">
            {/* Бейдж */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full text-sm font-medium text-white animate-fade-in-up">
              <span className="text-2xl mr-2">🔥</span>
              Ограниченное предложение
            </div>
            
            {/* Заголовок */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Акция
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
                "Парной месяц"
              </span>
            </h2>
            
            {/* Описание акции */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-4 font-light animate-fade-in-up animation-delay-400">
              14.08-16.08 – скидки до
              <span className="text-orange-400 font-bold"> 40%</span>
            </p>
            
            <p className="text-base sm:text-lg text-gray-300 mb-2 max-w-2xl mx-auto sm:mx-0 animate-fade-in-up animation-delay-600">
              на банные чаны из нержавеющей стали!
            </p>
            
            <p className="text-sm text-gray-400 italic mb-8 max-w-2xl mx-auto sm:mx-0 animate-fade-in-up animation-delay-700">
              (Уточняйте акционные модели у менеджера)
            </p>
            
            {/* Кнопка */}
            <div className="animate-fade-in-up animation-delay-800">
              <Button variant="primary" className="transform hover:scale-105 transition-all duration-300">
                Узнать подробности
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}