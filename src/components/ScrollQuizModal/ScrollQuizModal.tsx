'use client'

import { useState, useEffect } from 'react'
import Quiz from '../Quiz'

interface ScrollQuizModalProps {
  targetElementId?: string
}

export default function ScrollQuizModal({ targetElementId = 'gallery' }: ScrollQuizModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isQuizOpen, setIsQuizOpen] = useState(false)
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

  const handleOpenQuiz = () => {
    setIsQuizOpen(true)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible && !isQuizOpen) return null

  return (
    <>
      {isVisible && !isQuizOpen && (
        <div className={`fixed inset-0 z-50 transition-all duration-500 opacity-100`}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
          <div className="relative h-full flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-in-bottom">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Не нашли нужный чан на сайте?
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Давайте соберем его вместе
                </p>
                
                <button
                  onClick={handleOpenQuiz}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-6 rounded-lg transition-colors text-lg"
                >
                  Собрать чан
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isQuizOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative h-full flex flex-col">
            <div className="bg-white p-6 text-center border-b">
              <button
                onClick={() => { setIsQuizOpen(false); setIsVisible(false); }}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-800">
                Не нашли нужный чан на сайте? Давайте соберем его вместе
              </h2>
            </div>
            <div className="flex-1 overflow-hidden">
              <Quiz 
                isOpen={true} 
                onClose={() => { setIsQuizOpen(false); setIsVisible(false); }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}