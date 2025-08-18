'use client'

import { useState, useEffect } from 'react'

interface QuizOption {
  id: string
  title: string
  description?: string
  image?: string
  mainImage?: string
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
    title: "Соберите свой уникальный чан",
    question: "Какой размер банного чана вам нужен?",
    options: [
      {
        id: "size-6",
        title: 'Банный чан "Алтай"',
        description: '6 граней\nВместимость 4 чел\nДиаметр Ø 1700мм',
        image: "/images/products/shan 1.1.jpg",
        mainImage: "/images/products/shan 1.jpg"
      },
      {
        id: "size-8", 
        title: 'Банный чан "Сибирь"',
        description: '8 граней\nВместимость 6 чел\nДиаметр Ø 1900мм',
        image: "/images/products/shan 2.2.jpg",
        mainImage: "/images/products/shan 2.jpg"
      },
      {
        id: "size-10",
        title: 'Банный чан "Тайга"',
        description: '10 граней\nВместимость 10 чел\nДиаметр Ø 2300мм',
        image: "/images/products/shan 3.3.jpg",
        mainImage: "/images/products/shan 3.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "Форма чана",
    question: "Выберите форму",
    options: [
      {
        id: "form-grannaya",
        title: "Граненная",
        image: "/images/quiz/quiz1.1.png",
        mainImage: "/images/quiz/quiz1.png"
      },
      {
        id: "form-brilliant",
        title: "Бриллиантовая",
        image: "/images/quiz/quiz1.2.png",
        mainImage: "/images/quiz/quiz1.png"
      }
    ]
  },
  {
    id: 3,
    title: "Тип нагрева",
    question: "Какой тип нагрева вам нужен?",
    options: [
      {
        id: "heating-wood",
        title: "Электропечь",
        description: "Интегрирована с чаней – моментальный нагрев воды при минимальном потреблении электричества",
        image: "/images/quiz/quiz2.1.jpg",
        mainImage: "/images/quiz/quiz2.jpg"
      },
      {
        id: "heating-fire",
        title: "Подогрев от костра", 
        description: "Лаконичный дизайн, демократичная стоимость и завораживающая игра пламени во время процедур",
        image: "/images/quiz/quiz2.2.jpg",
        mainImage: "/images/quiz/quiz2.jpg"
      },
      {
        id: "heating-gas",
        title: "Газовая печь",
        description: "Газовая система нагрева – мгновенный результат, практически отсутствует дым и не образуется зола",
        image: "/images/quiz/quiz2.3.jpg",
        mainImage: "/images/quiz/quiz2.jpg"
      }
    ]
  },
  {
    id: 4,
    title: "Тип установки",
    question: "Какой тип установки вам нужен?",
    options: [
      {
        id: "install-wood",
        title: "Монтаж чана на деревянные срубы",
        description: "Создает аутентичный этнический колорит, идеально дополняя архитектуру в традиционном русском или скандинавском стиле",
        image: "/images/quiz/quiz3.3.jpg",
        mainImage: "/images/quiz/quiz3.jpg"
      },
      {
        id: "install-metal",
        title: "Установка на металлическую подставку",
        description: "Оптимальное пространственное решение, обеспечивающее универсальную интеграцию в любые ландшафтные дизайны",
        image: "/images/quiz/quiz3.4.png",
        mainImage: "/images/quiz/quiz3.jpg"
      }
    ]
  },
  {
    id: 5,
    title: "Дополнения",
    question: "Какие дополнения вы бы хотели?",
    multiSelect: true,
    options: [
      {
        id: "addon-hydro",
        title: "Гидромассажная система",
        description: "Погрузитесь в блаженство с нашей фирменной гидромассажной системой, создающей эффект природных джакузи",
        image: "/images/quiz/quiz4.1.png"
      },
      {
        id: "addon-led",
        title: "Многоцветная LED-подсветка",
        description: "Создавайте нужную атмосферу одним нажатием кнопки – мягкая подсветка превратит ваше купание в волшебный ритуал",
        image: "/images/quiz/quiz4.2.png"
      },
      {
        id: "addon-audio",
        title: "Встроенная аудиосистема", 
        description: "Наслаждайтесь любимой музыкой под открытым небом – кристально чистый звук и звездное небо создадут идеальную гармонию",
        image: "/images/quiz/quiz4.3.png"
      },
      {
        id: "addon-table",
        title: "Складной сервировочный столик",
        description: "Все необходимое для отдыха всегда под рукой – от бокала вина до гаджетов",
        image: "/images/quiz/quiz4.4.png"
      }
    ]
  }
]

export default function Quiz({ isOpen, onClose }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [isVisible, setIsVisible] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [selectedMainImage, setSelectedMainImage] = useState("/images/products/shan 1.jpg")

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

  useEffect(() => {
    // Устанавливаем изображение по умолчанию для каждого шага
    switch (currentStep) {
      case 1:
        setSelectedMainImage("/images/products/shan 1.jpg")
        break
      case 2:
        setSelectedMainImage("/images/quiz/quiz1.png")
        break
      case 3:
        setSelectedMainImage("/images/quiz/quiz2.jpg")
        break
      case 4:
        setSelectedMainImage("/images/quiz/quiz3.jpg")
        break
      case 5:
        setSelectedMainImage("/images/quiz/quiz4.jpg")
        break
      default:
        // Для остальных вопросов оставляем текущее изображение
        break
    }
  }, [currentStep])

  const currentStepData = quizSteps.find(step => step.id === currentStep)
  const totalSteps = quizSteps.length

  const handleOptionSelect = (optionId: string) => {
    const stepData = quizSteps.find(step => step.id === currentStep)
    if (!stepData) return

    const selectedOption = stepData.options.find(opt => opt.id === optionId)
    if (currentStep === 1 && selectedOption?.mainImage) {
      // Для первого вопроса используем mainImage
      setSelectedMainImage(selectedOption.mainImage)
    } else if ((currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5) && selectedOption?.image) {
      // Для вопросов 2, 3, 4, 5 показываем изображение из карточки
      setSelectedMainImage(selectedOption.image)
    }

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
      setIsCompleted(true)
    }
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

  const handleComplete = () => {
    console.log('Quiz completed:', answers)
    onClose()
    setIsCompleted(false)
    setCurrentStep(1)
    setAnswers({})
  }

  const getFormattedAnswers = () => {
    const formattedAnswers: { category: string, value: string }[] = []
    
    Object.entries(answers).forEach(([stepId, answerIds]) => {
      const step = quizSteps.find(s => s.id === parseInt(stepId))
      if (step) {
        answerIds.forEach(answerId => {
          const option = step.options.find(opt => opt.id === answerId)
          if (option) {
            if (step.id === 1) {
              // Для первого вопроса - размер чана
              const characteristics = option.description?.replace(/\n/g, ', ') || ''
              formattedAnswers.push({
                category: 'Размер чана',
                value: `${option.title.replace('Банный чан ', '')}, ${characteristics}`
              })
            } else {
              // Для остальных вопросов
              formattedAnswers.push({
                category: step.title,
                value: option.title
              })
            }
          }
        })
      }
    })
    
    return formattedAnswers
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
      <div className="relative h-full flex items-center justify-center p-4">
        <div 
          className="quiz-container bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[700px] overflow-hidden animate-slide-in-bottom relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div className="relative p-6 pb-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Progress Dots */}
            <div className="flex justify-center mb-4 mt-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                    i + 1 <= currentStep ? 'bg-orange-400' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Question Counter */}
            <div className="text-sm text-gray-600 mb-2">
              Вопрос {currentStep} из {totalSteps}
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Main Image */}
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Соберите свой уникальный чан</h2>
                
                <div className="w-full max-w-sm h-96 rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={selectedMainImage} 
                    alt="Банный чан"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                
                {/* Selected Answers */}
                <div className="space-y-1 min-h-[120px]">
                  {getFormattedAnswers().map((answer, index) => (
                    <div key={index} className="text-xs text-gray-600 break-words leading-relaxed">
                      <span className="font-bold text-gray-800">{answer.category}:</span> <span className="font-normal">{answer.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Side - Options */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800">{currentStepData?.question}</h3>
                
                <div className={`${currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-3 gap-4'}`}>
                  {currentStepData?.options.map((option) => {
                    const isSelected = answers[currentStep]?.includes(option.id) || false
                    
                    return (
                      <div
                        key={option.id}
                        onClick={() => handleOptionSelect(option.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 ? 'flex items-center' : 'text-center'} ${
                          isSelected 
                            ? 'border-orange-400 bg-orange-50 shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option.image && (
                          <div className={`${currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 ? 'w-24 h-24 mr-4 flex-shrink-0' : 'w-full h-24 mb-3'} rounded-lg overflow-hidden bg-gray-100`}>
                            <img 
                              src={option.image} 
                              alt={option.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div className={`${currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 ? 'flex-1' : ''}`}>
                          <h5 className="font-bold text-gray-800 text-sm mb-2 leading-tight">{option.title}</h5>
                          
                          {option.description && (
                            <div className="text-xs text-gray-500 mb-3 leading-relaxed">
                              {option.description.split('\n').map((line, index) => (
                                <div key={index}>{line}</div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className={`w-5 h-5 rounded-full border-2 ${currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 ? 'ml-4 flex-shrink-0' : 'mx-auto'} transition-colors ${
                          isSelected ? 'border-orange-400 bg-orange-400' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <div className="w-full h-full rounded-full bg-white scale-50" />
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons - Bottom Right */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                ← Назад
              </button>
            )}
            {isStepCompleted() && (
              <button
                onClick={handleNext}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                {currentStep === totalSteps ? 'Получить расчет' : 'Далее →'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}