import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import CursorSteam from '@/components/CursorSteam'
import ContactBar from '@/components/ContactBar'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: '🔥 Банный чан от производителя 🔥 | Купить купель для купания 🏊♂️ | Гарантия 10 лет 💯',
  description: 'Банные чаны от производителя! 🔥 Купить купель для купания с подогревом по выгодной цене. 🏊♂️ Доставка по всей России и СНГ! Изготовление под заказ.',
  keywords: 'банный чан купить, сибирский чан, купель с подогревом, уличная баня, чан на дровах цена, купель для дачи, банный чан с печкой, купить чан для бани',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="google-site-verification" content="HE6MqMZdcZ7IIv2Yv9n3ZxGSZZpu8ms2LJlcbG85jGE" />
        <link
          href="https://fonts.googleapis.com/css2?family=TT+Prosto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorSteam />
        <Header />
        {children}
        <ContactBar />
        <ScrollToTop />
      </body>
    </html>
  )
}