'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Компания */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Банные Чаны</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Производитель качественных деревянных банных чанов с гарантией 10 лет. 
              Изготовление под заказ и доставка по всей России.
            </p>
          </div>

          {/* Продукция */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Продукция</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Банные чаны
                </Link>
              </li>
              <li>
                <Link href="#heating" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Системы подогрева
                </Link>
              </li>
              <li>
                <Link href="#accessories" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Аксессуары
                </Link>
              </li>
              <li>
                <Link href="#custom" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Под заказ
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#delivery" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="#warranty" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Гарантия
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Конфиденциальность
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-accent">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">+7 (XXX) XXX-XX-XX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-accent">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">info@bath-tub.ru</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-accent">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">Россия, доставка по СНГ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Банные Чаны. Все права защищены.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-accent transition-colors text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                href="#terms" 
                className="text-gray-400 hover:text-accent transition-colors text-sm"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer