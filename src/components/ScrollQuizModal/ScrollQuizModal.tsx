'use client'

import { useState, useEffect } from 'react'
import Quiz from '../Quiz'

interface ScrollQuizModalProps {
  targetElementId?: string
}

export default function ScrollQuizModal({ targetElementId = 'gallery' }: ScrollQuizModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return

      const targetElement = document.getElementById(targetElementId)
      if (!targetElement) return

      const rect = targetElement.getBoundingClientRect()
      const isInView = rect.top <= window.innerHeight * 0.5

      if (isInView) {
        setIsVisible(true)
        setHasTriggered(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [targetElementId, hasTriggered])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative h-full flex flex-col" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="bg-white p-4 sm:p-6 text-center border-b relative">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleClose()
            }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors touch-manipulation"
          >
            <svg className="w-6 h-6 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 pr-12 sm:pr-12 leading-tight">
            Не нашли нужный чан на сайте? Давайте соберем его вместе
          </h2>
        </div>
        <div className="flex-1 overflow-hidden">
          <Quiz 
            isOpen={true} 
            onClose={handleClose}
          />
        </div>
      </div>
    </div>
  )
}