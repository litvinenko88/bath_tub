import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="logo-container">
      <div className="logo-text">
        <span className="text-white font-medium text-lg sm:text-xl">NOVA</span>
      </div>
    </Link>
  )
}