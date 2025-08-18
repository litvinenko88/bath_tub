'use client'

import { useState, useEffect } from 'react'

interface QuizOption {
  id: string
  title: string
  description?: string
}

interface QuizStep {
  id: number
  title: string
  question: string
  options: QuizOption[]
  multiSelect?: boolean
}

interface QuizProps {
  isOpen: boolean
  onClose: () => void
}

const quizSteps: QuizStep[] = [
  {
    id: 1,
    title: "Создание уникального чана",
    question: "Какой размер банного чана вам нужен?",
    options: [
      {
        id: "size-6",
        title: "6 граней / вместимость 4 чел / диаметр Ø 1700мм",
      },
      {
        id: "size-8", 
        title: "8 граней / вместимость 6 чел / диаметр Ø 1900мм",
      },
      {
        id: "size-10",
        title: "10 граней / вместимость 10 чел / диаметр Ø 2300мм",
      }
    ]
  },
  {
    id: 2,
    title: "Тип нагрева",
    question: "Какой тип нагрева вам нужен?",
    options: [
      {
        id: "heating-wood",
        title: "Подогрев от дровяной печи",
        description: "Интегрирована с чаней – моментальный нагрев воды при минимальном потреблении дров"
      },
      {
        id: "heating-fire",
        title: "Подогрев от костра", 
        description: "Лаконичный дизайн, демократичная стоимость и завораживающая игра пламени во время процедур"
      },
      {
        id: "heating-gas",
        title: "Газовая печь",
        description: "Газовая система нагрева – мгновенный результат, практически отсутствует дым и не образуется зола"
      }
    ]
  },
  {
    id: 3,
    title: "Тип установки",
    question: "Какой тип установки вам нужен?",
    options: [
      {
        id: "install-wood",
        title: "Монтаж чана на деревянные срубы",
        description: "Создает аутентичный этнический колорит, идеально дополняя архитектуру в традиционном русском или скандинавском стиле"
      },
      {
        id: "install-metal",
        title: "Установка на металлическую подставку",
        description: "Оптимальное пространственное решение, обеспечивающее универсальную интеграцию в любые ландшафтные дизайны"
      }
    ]
  },
  {
    id: 4,
    title: "Дополнения",
    question: "Какие дополнения вы бы хотели?",
    multiSelect: true,
    options: [
      {
        id: "addon-hydro",
        title: "Гидромассажная система",
        description: "Погрузитесь в блаженство с нашей фирменной гидромассажной системой, создающей эффект природных джакузи"
      },
      {
        id: "addon-led",
        title: "Многоцветная LED-подсветка",
        description: "Создавайте нужную атмосферу одним нажатием кнопки – мягкая подсветка превратит ваше купание в волшебный ритуал"
      },
      {
        id: "addon-audio",
        title: "Встроенная аудиосистема", 
        description: "Наслаждайтесь любимой музыкой под открытым небом – кристально чистый звук и звездное небо создадут идеальную гармонию"
      },
      {
        id: "addon-table",
        title: "Складной сервировочный столик",
        description: "Все необходимое для отдыха всегда под рукой – от бокала вина до гаджетов"
      }
    ]
  }
]

export default function Quiz({ isOpen, onClose }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [isVisible, setIsVisible] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsVisible(true)
    } else {
      document.body.style.overflow = 'unset'
      setIsVisible(false)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const currentStepData = quizSteps.find(step => step.id === currentStep)
  const totalSteps = quizSteps.length

  const handleOptionSelect = (optionId: string) => {
    const stepData = quizSteps.find(step => step.id === currentStep)
    if (!stepData) return

    if (stepData.multiSelect) {
      const currentAnswers = answers[currentStep] || []
      const newAnswers = currentAnswers.includes(optionId)
        ? currentAnswers.filter(id => id !== optionId)
        : [...currentAnswers, optionId]
      
      setAnswers(prev => ({
        ...prev,
        [currentStep]: newAnswers
      }))
    } else {
      setAnswers(prev => ({
        ...prev,
        [currentStep]: [optionId]
      }))
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Завершение квиза
      setIsCompleted(true)
    }
  }

  const handleComplete = () => {
    console.log('Quiz completed:', answers)
    // Здесь можно отправить данные на сервер
    onClose()
    setIsCompleted(false)
    setCurrentStep(1)
    setAnswers({})
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const isStepCompleted = () => {
    const stepAnswers = answers[currentStep] || []
    return stepAnswers.length > 0
  }

  if (!isOpen) return null

  if (isCompleted) {
    return (
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <div className="relative h-full flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-in-bottom">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Спасибо!</h2>
              <p className="text-green-100">Ваш расчет готов</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 mb-6">
                Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей и предоставления точного расчета стоимости.
              </p>
              <button
                onClick={handleComplete}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Quiz Container */}
      <div className={`relative h-full flex items-center justify-center p-4 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <div className="quiz-container bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-slide-in-bottom">
          {/* Header */}
          <div className="quiz-header bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Расчет стоимости уникального чана</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Шаг {currentStep} из {totalSteps}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="progress-bar bg-orange-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold">{currentStepData?.title}</h3>
          </div>

          {/* Content */}
          <div className="quiz-content p-6 overflow-y-auto max-h-[60vh]">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              {currentStepData?.question}
            </h4>

            <div className="space-y-4">
              {currentStepData?.options.map((option) => {
                const isSelected = answers[currentStep]?.includes(option.id) || false
                
                return (
                  <div
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`quiz-option-card p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md animate-slide-in-right ${
                      isSelected 
                        ? 'border-orange-400 bg-orange-50 shadow-lg selected' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ animationDelay: `${currentStepData?.options.indexOf(option) * 0.1}s` }}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 flex-shrink-0 transition-colors ${
                        isSelected ? 'border-orange-400 bg-orange-400' : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <div className="w-full h-full rounded-full bg-white scale-50" />
                        )}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 mb-1">{option.title}</h5>
                        {option.description && (
                          <p className="text-sm text-gray-600">{option.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="quiz-footer p-6 bg-gray-50 border-t flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
              }`}
            >
              ← Назад
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepCompleted()}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                isStepCompleted()
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === totalSteps ? 'Получить расчет' : 'Далее →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}