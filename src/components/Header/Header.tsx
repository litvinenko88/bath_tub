'use client'

import { useState } from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import ConsultationButton from '../ConsultationButton'
import HamburgerButton from '../HamburgerButton'
import MobileMenu from '../MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Рассчитать стоимость', href: '#pricing' },
    { name: 'Доставка', href: '#delivery' },
    { name: 'Типы нагрева', href: '#heating' },
    { name: 'О компании', href: '#about' },
    { name: 'Контакты', href: '#contacts' }
  ]

  return (
    <header className="header-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <Navigation menuItems={menuItems} />
          
          <div className="flex items-center space-x-4">
            <ConsultationButton />
            <HamburgerButton 
              isMenuOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </div>
        </div>
      </div>

      <MobileMenu 
        isMenuOpen={isMenuOpen}
        menuItems={menuItems}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  )
}