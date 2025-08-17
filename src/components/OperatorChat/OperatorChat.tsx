'use client'

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import Image from 'next/image'

interface OperatorChatRef {
  openChat: () => void
}

const OperatorChat = forwardRef<OperatorChatRef>((props, ref) => {
  const [showNotification, setShowNotification] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 12000) // 12 секунд

    return () => clearTimeout(timer)
  }, [])



  const handleAcceptPromo = () => {
    setShowNotification(false)
    setShowChat(true)
  }

  useImperativeHandle(ref, () => ({
    openChat: () => {
      setShowChat(true)
      setShowNotification(false)
    }
  }))

  const handleCloseNotification = () => {
    setShowNotification(false)
  }

  const handleCloseChat = () => {
    setShowChat(false)
  }

  return (
    <>
      {/* Уведомление */}
      {showNotification && (
        <div className="fixed bottom-20 right-3 sm:right-6 z-40 animate-fade-in max-w-[calc(100vw-24px)] sm:max-w-none">
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-100 p-5 w-80 max-w-full backdrop-blur-sm">
            {/* Хвостик уведомления */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gradient-to-br from-white to-gray-50 border-r border-b border-gray-100 transform rotate-45 shadow-sm"></div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-t-2xl"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse opacity-80"></div>
            
            {/* Кнопка закрытия */}
            <button 
              onClick={handleCloseNotification}
              className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Аватар оператора */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                  <Image 
                    src="/images/operator.png" 
                    alt="Оператор" 
                    width={32} 
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-800 text-sm">Александр</h4>
                  <span className="text-xs text-green-600 font-medium">онлайн</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Здравствуйте! 👋 Сейчас у нас проходит акция <span className="font-semibold text-orange-600">"Парной месяц"</span> хотите принять участие?
                </p>
              </div>
            </div>

            <button 
              onClick={handleAcceptPromo}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>🔥 Принять участие</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      )}

      {/* Чат */}
      {showChat && (
        <div className="fixed bottom-20 right-3 sm:right-6 z-40 animate-fade-in max-w-[calc(100vw-24px)] sm:max-w-none">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 sm:w-96 max-w-full h-80 sm:h-96 flex flex-col overflow-hidden backdrop-blur-sm">
            {/* Заголовок чата */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
              <div className="flex items-center space-x-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Image 
                      src="/images/operator.png" 
                      alt="Оператор" 
                      width={32} 
                      height={32}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Александр</h3>
                  <p className="text-xs opacity-90 flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>Онлайн</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={handleCloseChat}
                className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Сообщения */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white">
              <div className="space-y-4">
                {/* Сообщение оператора */}
                <div className="flex items-start space-x-3 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
                    <Image 
                      src="/images/operator.png" 
                      alt="Оператор" 
                      width={24} 
                      height={24}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-100">
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Отлично! 🔥 Рад что хотите принять участие. В акции <span className="font-semibold text-orange-600">"Парной месяц"</span> мы дарим скидки до <span className="font-bold text-red-600">40%</span> нашим клиентам на банный чан из нержавеющей стали.
                      </p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-700">
                          Давайте я вас свяжу с менеджером и он расскажет более подробнее! 📞
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 px-1">
                      <span className="text-xs text-gray-500">Только что</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Быстрые действия */}
                <div className="flex flex-wrap gap-2 mt-4 px-11">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs font-medium py-2 px-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-sm">
                    📱 WhatsApp
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs font-medium py-2 px-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-sm">
                    📞 Позвонить
                  </button>
                </div>
              </div>
            </div>

            {/* Индикатор набора */}
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span>Александр печатает...</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
})

OperatorChat.displayName = 'OperatorChat'

export default OperatorChat