'use client'

import { useState } from 'react'
import * as React from 'react'
import { sendToTelegram } from '../../utils/telegram'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  source?: string
}

const ConsultationModal = ({ isOpen, onClose, source = 'Кнопка "Консультация" в Header' }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false
  })
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const validateForm = () => {
    const newErrors = { name: '', phone: '' }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа'
    } else if (!/^[а-яёА-ЯЁa-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Имя может содержать только буквы'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения'
    } else if (!/^\+?[0-9\s\-\(\)]{10,12}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона'
    }
    
    setErrors(newErrors)
    return !newErrors.name && !newErrors.phone
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent || !validateForm()) return

    setIsSubmitting(true)
    setError('')

    try {
      const success = await sendToTelegram({
        name: formData.name,
        phone: formData.phone,
        source: source
      })
      
      if (success) {
        setIsSuccess(true)
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
          setFormData({ name: '', phone: '', consent: false })
          setErrors({ name: '', phone: '' })
        }, 2000)
      } else {
        setError('Ошибка отправки. Попробуйте еще раз.')
      }
    } catch (error) {
      console.error('Ошибка отправки:', error)
      setError('Произошла ошибка при отправке. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Блокировка скролла
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Получить консультацию</h2>
            <p className="text-gray-600">Оставьте заявку и мы свяжемся с вами в течение 5 минут</p>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Заявка отправлена!</h3>
              <p className="text-gray-600">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  maxLength={15}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (errors.name) setErrors({ ...errors, name: '' })
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-800 bg-white ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Введите ваше имя"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Номер телефона</label>
                <input
                  type="tel"
                  required
                  maxLength={12}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value })
                    if (errors.phone) setErrors({ ...errors, phone: '' })
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-800 bg-white ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+7 (999) 123-45-67"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  Я согласен на обработку персональных данных в соответствии с{' '}
                  <a href="/privacy" className="text-orange-500 hover:text-orange-600 underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Отправляем...</span>
                  </div>
                ) : (
                  'Получить консультацию'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConsultationModal