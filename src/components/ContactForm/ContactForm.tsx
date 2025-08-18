'use client'

import { useState } from 'react'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  quizData: Record<number, string[]>
}

export default function ContactForm({ isOpen, onClose, quizData }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreement: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  
  const SUCCESS_DISPLAY_DURATION = 2000

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите телефон'
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Некорректный номер телефона'
    }

    if (!formData.agreement) {
      newErrors.agreement = 'Необходимо согласие на обработку данных'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          source: 'Квиз - Расчет стоимости',
          quizData: quizData
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          setFormData({ name: '', phone: '', agreement: false })
          setErrors({})
          setIsSuccess(false)
        }, SUCCESS_DISPLAY_DURATION)
      } else {
        setError('Ошибка отправки. Попробуйте еще раз.')
      }
    } catch (error) {
      console.error('Ошибка отправки:', error)
      setError('Ошибка сети. Проверьте подключение к интернету.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="p-4 sm:p-6">
          <div className="text-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Получить расчет</h2>
            <p className="text-gray-600 text-sm sm:text-base">Оставьте заявку и мы свяжемся с вами в течение 5 минут</p>
          </div>

          {isSuccess ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Заявка отправлена!</h3>
              <p className="text-gray-600 text-sm sm:text-base">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Ваше имя</label>
              <input
                type="text"
                required
                maxLength={15}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-800 bg-white ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Введите ваше имя"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Номер телефона</label>
              <input
                type="tel"
                required
                maxLength={12}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-800 bg-white ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+7 (999) 123-45-67"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <input
                type="checkbox"
                id="agreement"
                required
                checked={formData.agreement}
                onChange={(e) => handleInputChange('agreement', e.target.checked)}
                className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 flex-shrink-0"
              />
              <label htmlFor="agreement" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Я согласен на обработку персональных данных в соответствии с{' '}
                <a href="/privacy" className="text-orange-500 hover:text-orange-600 underline">
                  политикой конфиденциальности
                </a>
              </label>
            </div>
            {errors.agreement && <p className="text-red-500 text-sm mt-1">{errors.agreement}</p>}
            
            {error && <div className="text-red-500 text-sm text-center p-2 bg-red-50 rounded">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting || !formData.agreement}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm sm:text-base">Отправляем...</span>
                </div>
              ) : (
                'Получить'
              )}
            </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}