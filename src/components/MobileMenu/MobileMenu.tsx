interface MobileMenuProps {
  isMenuOpen: boolean
  menuItems: string[]
  onClose: () => void
}

export default function MobileMenu({ isMenuOpen, menuItems, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Мобильное меню */}
      <div className={`mobile-menu-modern ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-backdrop"></div>
        <nav className="mobile-nav">
          <button className="consultation-btn-mobile">
            Консультация
          </button>
          {menuItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className="mobile-nav-item"
              style={{ animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s' }}
              onClick={onClose}
            >
              {item}
            </a>
          ))}
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