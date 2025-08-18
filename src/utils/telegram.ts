interface TelegramData {
  name: string
  phone: string
  source?: string
  quizData?: Record<number, string[]>
}

const TELEGRAM_BOT_TOKEN = '8377894078:AAGnvLSJAiRYGjigMw9yYeUeYWzghPw5X7E'
const TELEGRAM_CHAT_ID = '682859146'

export async function sendToTelegram(data: TelegramData): Promise<boolean> {
  try {
    // Сначала пробуем отправить через API route (для Next.js)
    if (typeof window !== 'undefined' && window.location.origin) {
      try {
        const response = await fetch('/api/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        
        if (response.ok) {
          return true
        }
      } catch (error) {
        console.log('API route недоступен, используем прямую отправку')
      }
    }

    // Если API route недоступен, отправляем напрямую в Telegram (для статических сайтов)
    return await sendDirectToTelegram(data)
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error)
    return false
  }
}

async function sendDirectToTelegram(data: TelegramData): Promise<boolean> {
  const { name, phone, source, quizData } = data

  let message = `🔔 Новая заявка с сайта!\n\n`
  message += `👤 Имя: ${name}\n`
  message += `📞 Телефон: ${phone}\n`
  message += `📍 Источник: ${source || 'Не указан'}\n`

  if (quizData && Object.keys(quizData).length > 0) {
    message += `\n📋 Результаты квиза:\n`
    
    const quizOptions: Record<string, string> = {
      'size-6': 'Банный чан "Алтай" (6 граней, 4 чел, Ø 1700мм)',
      'size-8': 'Банный чан "Сибирь" (8 граней, 6 чел, Ø 1900мм)',
      'size-10': 'Банный чан "Тайга" (10 граней, 10 чел, Ø 2300мм)',
      'form-grannaya': 'Граненная',
      'form-brilliant': 'Бриллиантовая',
      'heating-wood': 'Электропечь',
      'heating-fire': 'Подогрев от костра',
      'heating-gas': 'Газовая печь',
      'install-wood': 'Монтаж чана на деревянные срубы',
      'install-metal': 'Установка на металлическую подставку',
      'addon-hydro': 'Гидромассажная система',
      'addon-led': 'Многоцветная LED-подсветка',
      'addon-audio': 'Встроенная аудиосистема',
      'addon-table': 'Складной сервировочный столик'
    }

    const quizSteps = [
      { id: 1, title: 'Размер чана' },
      { id: 2, title: 'Форма чана' },
      { id: 3, title: 'Тип нагрева' },
      { id: 4, title: 'Тип установки' },
      { id: 5, title: 'Дополнения' }
    ]

    Object.entries(quizData).forEach(([stepId, answers]) => {
      const step = quizSteps.find(s => s.id === parseInt(stepId))
      if (step && Array.isArray(answers) && answers.length > 0) {
        message += `\n${step.title}:\n`
        answers.forEach(answerId => {
          const optionTitle = quizOptions[answerId] || answerId
          message += `• ${optionTitle}\n`
        })
      }
    })
  }

  message += `\n⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  
  const response = await fetch(telegramUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    })
  })

  return response.ok
}