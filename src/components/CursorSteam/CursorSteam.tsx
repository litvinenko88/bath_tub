'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export default function CursorSteam() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([])
  const timeoutsRef = useRef<Set<NodeJS.Timeout>>(new Set())
  const lastMoveRef = useRef<number>(0)

  const addParticle = useCallback((x: number, y: number) => {
    const newParticle = {
      id: Date.now() + Math.random(),
      x,
      y
    }
    
    setParticles(prev => [...prev.slice(-5), newParticle])
    
    const timeout = setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id))
      timeoutsRef.current.delete(timeout)
    }, 1000)
    
    timeoutsRef.current.add(timeout)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMoveRef.current < 100) return
      lastMoveRef.current = now
      
      requestAnimationFrame(() => addParticle(e.clientX, e.clientY))
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
      timeoutsRef.current.clear()
    }
  }, [addParticle])

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