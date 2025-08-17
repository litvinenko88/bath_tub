'use client'

import { useEffect, useState } from 'react'

export default function CursorSteam() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([])

  useEffect(() => {
    let particleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY
      }
      
      setParticles(prev => [...prev, newParticle])
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id))
      }, 2000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 bg-white/20 rounded-full animate-steam"
          style={{
            left: particle.x - 6,
            top: particle.y - 6,
          }}
        />
      ))}
    </div>
  )
}