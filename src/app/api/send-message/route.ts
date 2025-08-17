import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone, source } = await request.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
    }

    const message = `🔥 Новая заявка с сайта "Банные чаны"

👤 Имя: ${name}
📞 Телефон: ${phone}
📍 Источник: ${source}

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