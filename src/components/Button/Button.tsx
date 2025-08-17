interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'btn-skewed'
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      <span className="btn-content">{children}</span>
    </button>
  )
}