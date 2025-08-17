'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import OperatorChat from '@/components/OperatorChat'

const ContactBar = () => {
  const [showAllButtons, setShowAllButtons] = useState(false)
  const chatRef = useRef<{ openChat: () => void }>(null)

  const handleOperatorClick = () => {
    chatRef.current?.openChat()
  }

  useEffect(() => {
    const handleScroll = () => {
      const thirdSection = document.querySelector('main > *:nth-child(3)')
      if (thirdSection) {
        const rect = thirdSection.getBoundingClientRect()
        setShowAllButtons(rect.top <= window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Оператор - всегда видим */}
      <button 
        onClick={handleOperatorClick}
        className="group relative w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
      >
        <Image 
          src="/images/operator.png" 
          alt="Оператор" 
          width={48} 
          height={48}
          className="rounded-full object-cover shadow-lg"
        />
        <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Онлайн консультант
        </div>
      </button>

      {/* Остальные кнопки - появляются при скролле */}
      <div className={`flex flex-col items-center space-y-3 transition-all duration-500 ${
        showAllButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* WhatsApp */}
        <a 
          href="https://wa.me/79964179001" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-green-500 hover:bg-green-400 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            WhatsApp
          </div>
        </a>

        {/* Telegram */}
        <a 
          href="https://t.me/litvinenko_n_v" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-blue-500 hover:bg-blue-400 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Telegram
          </div>
        </a>

        {/* Звонок */}
        <a 
          href="tel:+79964179001"
          className="group relative bg-red-500 hover:bg-red-400 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse border-2 border-red-300"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Позвонить
          </div>
        </a>
      </div>
      
      {/* Компонент чата */}
      <OperatorChat ref={chatRef} />
    </div>
  )
}

export default ContactBar