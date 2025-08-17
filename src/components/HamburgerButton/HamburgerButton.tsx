interface HamburgerButtonProps {
  isMenuOpen: boolean
  onClick: () => void
}

export default function HamburgerButton({ isMenuOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      className="lg:hidden hamburger-modern"
      onClick={onClick}
      aria-label="Меню"
    >
      <div className={`hamburger-line-modern ${isMenuOpen ? 'open' : ''}`}></div>
      <div className={`hamburger-line-modern ${isMenuOpen ? 'open' : ''}`}></div>
      <div className={`hamburger-line-modern ${isMenuOpen ? 'open' : ''}`}></div>
    </button>
  )
}