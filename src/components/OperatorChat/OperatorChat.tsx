'use client'

import { useState, useEffect } from 'react'

interface OperatorChatProps {
  onChatOpen: () => void
}

const OperatorChat = ({ onChatOpen }: OperatorChatProps) => {
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
    onChatOpen()
  }

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
        <div className="fixed bottom-20 right-6 z-40 animate-fade-in">
          <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs">
            {/* Хвостик уведомления */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
            
            {/* Кнопка закрытия */}
            <button 
              onClick={handleCloseNotification}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="pr-6">
              <p className="text-sm text-gray-800 mb-3">
                Здравствуйте! Сейчас у нас проходит акция "Парной месяц" хотите принять участие?
              </p>
              <button 
                onClick={handleAcceptPromo}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Принять участие
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Чат */}
      {showChat && (
        <div className="fixed bottom-20 right-6 z-40 animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 h-96 flex flex-col">
            {/* Заголовок чата */}
            <div className="bg-orange-500 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 text-sm font-bold">О</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Оператор</h3>
                  <p className="text-xs opacity-90">Онлайн</p>
                </div>
              </div>
              <button 
                onClick={handleCloseChat}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Сообщения */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-800">
                  Отлично🔥 рад что хотите принять участие. В акции парной месяц мы дарим скидки до 40% нашим клиентам на банный чан из нержавеющей стали. Давайте я вас свяжу с менеджером и он расскажет более подробнее!
                </p>
                <span className="text-xs text-gray-500 mt-1 block">Только что</span>
              </div>
            </div>

            {/* Поле ввода */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Напишите сообщение..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OperatorChat