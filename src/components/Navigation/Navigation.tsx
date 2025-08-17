interface NavigationProps {
  menuItems: string[]
}

export default function Navigation({ menuItems }: NavigationProps) {
  return (
    <nav className="hidden lg:flex space-x-1">
      {menuItems.map((item, index) => (
        <a
          key={item}
          href="#"
          className="nav-item"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item}
        </a>
      ))}
    </nav>
  )
}