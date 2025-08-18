import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, source, quizData } = await request.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
    }

    // Форматируем данные квиза если они есть
    const formatQuizData = () => {
      if (!quizData || Object.keys(quizData).length === 0) return ''
      
      const quizSteps = [
        { id: 1, title: 'Размер чана', options: [
          { id: 'size-6', title: 'Банный чан "Алтай"', description: '6 граней, Вместимость 4 чел, Диаметр Ø 1700мм' },
          { id: 'size-8', title: 'Банный чан "Сибирь"', description: '8 граней, Вместимость 6 чел, Диаметр Ø 1900мм' },
          { id: 'size-10', title: 'Банный чан "Тайга"', description: '10 граней, Вместимость 10 чел, Диаметр Ø 2300мм' }
        ]},
        { id: 2, title: 'Форма чана', options: [
          { id: 'form-grannaya', title: 'Граненная' },
          { id: 'form-brilliant', title: 'Бриллиантовая' }
        ]},
        { id: 3, title: 'Тип нагрева', options: [
          { id: 'heating-wood', title: 'Электропечь' },
          { id: 'heating-fire', title: 'Подогрев от костра' },
          { id: 'heating-gas', title: 'Газовая печь' }
        ]},
        { id: 4, title: 'Тип установки', options: [
          { id: 'install-wood', title: 'Монтаж чана на деревянные срубы' },
          { id: 'install-metal', title: 'Установка на металлическую подставку' }
        ]},
        { id: 5, title: 'Дополнения', options: [
          { id: 'addon-hydro', title: 'Гидромассажная система' },
          { id: 'addon-led', title: 'Многоцветная LED-подсветка' },
          { id: 'addon-audio', title: 'Встроенная аудиосистема' },
          { id: 'addon-table', title: 'Складной сервировочный столик' }
        ]}
      ]

      let quizText = '\n\n📋 РЕЗУЛЬТАТЫ КВИЗА:\n'
      Object.entries(quizData).forEach(([stepId, answerIds]) => {
        const step = quizSteps.find(s => s.id === parseInt(stepId))
        if (step && Array.isArray(answerIds)) {
          quizText += `\n❓ ${step.title}:\n`
          answerIds.forEach(answerId => {
            const option = step.options.find(opt => opt.id === answerId)
            if (option) {
              quizText += `✅ ${option.title}\n`
              if (option.description) {
                quizText += `   ${option.description}\n`
              }
            }
          })
        }
      })
      return quizText
    }

    const message = `🔥 Новая заявка с сайта "Банные чаны"

👤 Имя: ${name}
📞 Телефон: ${phone}
📍 Источник: ${source}${formatQuizData()}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`

    const response = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message
      })
    })

    if (!response.ok) {
      throw new Error('Ошибка отправки в Telegram')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Ошибка API:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}