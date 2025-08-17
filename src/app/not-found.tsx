import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Страница не найдена
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0L3.586 10l4.707-4.707a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Вернуться на главную
          </Link>
        </div>
        
        <div className="mt-12 text-gray-400 text-sm">
          <p>Или свяжитесь с нами:</p>
          <a href="tel:+79964179001" className="text-orange-400 hover:text-orange-300 transition-colors">
            +7 (996) 417-90-01
          </a>
        </div>
      </div>
    </div>
  )
}