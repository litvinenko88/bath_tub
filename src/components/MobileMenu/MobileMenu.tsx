interface MobileMenuProps {
  isMenuOpen: boolean
  menuItems: { name: string; href: string }[]
  onClose: () => void
  onConsultationClick: () => void
}

export default function MobileMenu({ isMenuOpen, menuItems, onClose, onConsultationClick }: MobileMenuProps) {
  return (
    <>
      {/* Мобильное меню */}
      <div className={`mobile-menu-modern ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-backdrop"></div>
        <nav className="mobile-nav">
          <button 
            className="consultation-btn-mobile"
            onClick={() => {
              onConsultationClick()
              onClose()
            }}
          >
            Консультация
          </button>
          {menuItems.map((item, index) => {
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (item.href === '#pricing') {
                onClose()
                return
              }
              
              e.preventDefault()
              const element = document.querySelector(item.href)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
              onClose()
            }

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={handleClick}
                className="mobile-nav-item"
                style={{ animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s' }}
              >
                {item.name}
              </a>
            )
          })}
        </nav>
      </div>

      {/* Оверлей */}
      {isMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={onClose}
        ></div>
      )}
    </>
  )
}