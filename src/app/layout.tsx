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
  alternates: {
    canonical: 'https://nova-bathtub.ru'
  },
  openGraph: {
    title: 'Банный чан от производителя | Купить купель для купания',
    description: 'Банные чаны от производителя! Купить купель для купания с подогревом по выгодной цене. Доставка по всей России и СНГ!',
    url: 'https://nova-bathtub.ru',
    siteName: 'Nova Bathtub',
    type: 'website',
    locale: 'ru_RU'
  }
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
        <link rel="canonical" href="https://nova-bathtub.ru" />
        <link
          href="https://fonts.googleapis.com/css2?family=TT+Prosto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nova Bathtub",
              "url": "https://nova-bathtub.ru",
              "logo": "https://nova-bathtub.ru/logo.png",
              "description": "Производство и продажа банных чанов премиум класса",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RU",
                "addressRegion": "Ставропольский край"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7-800-000-0000",
                "contactType": "customer service"
              }
            })
          }}
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