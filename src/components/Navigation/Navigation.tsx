interface NavigationProps {
  menuItems: { name: string; href: string }[]
}

export default function Navigation({ menuItems }: NavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#pricing') return // Не обрабатываем клик по "Рассчитать стоимость"
    
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="hidden lg:flex space-x-1">
      {menuItems.map((item, index) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="nav-item"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item.name}
        </a>
      ))}
    </nav>
  )
}