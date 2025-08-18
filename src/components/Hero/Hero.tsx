'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
import Quiz from '../Quiz'

export default function Hero() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <>
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0">
        <Image 
          src="/images/glavn-fonts.jpg" 
          alt="Банный чан с подогревом под открытым небом"
          className="w-full h-full object-cover object-right"
          priority
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Контент */}
      <div className="relative z-10 min-h-screen py-20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center sm:text-left">
            {/* Бейдж */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white animate-fade-in-up">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Производство в России
            </div>
            
            {/* Заголовок */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Банные чаны
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
                премиум класса
              </span>
            </h1>
            
            {/* Подзаголовок */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-4 font-light animate-fade-in-up animation-delay-400">
              Ваш личный SPA-курорт под
              <span className="text-orange-400 font-medium"> открытым небом</span>
            </p>
            
            {/* Описание */}
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto sm:mx-0 animate-fade-in-up animation-delay-600">
              Изготовление и доставка по всей России за 5-10 дней. Качество, проверенное временем.
            </p>
            
            {/* Преимущества */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-10 animate-fade-in-up animation-delay-800">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white font-medium">Рассрочка 12-24 месяца</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white font-medium">Гарантия 10 лет</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white font-medium">Экологичные материалы</span>
              </div>
            </div>
            
            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start animate-fade-in-up animation-delay-1000">
              <a 
                href="#catalog"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#catalog')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-block w-full sm:w-auto"
              >
                <Button variant="primary" className="transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  Посмотреть каталог
                </Button>
              </a>
              <Button 
                variant="secondary" 
                className="transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsQuizOpen(true)}
              >
                Рассчитать стоимость
              </Button>
            </div>
            
            {/* Дополнительная информация */}
            <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-1200">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Производство в Ставрополе
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Доставка 5-10 дней
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Консультация 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
    
    <Quiz 
      isOpen={isQuizOpen} 
      onClose={() => setIsQuizOpen(false)}
    />
    </>
  )
}