import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import CursorSteam from '@/components/CursorSteam'
import ContactBar from '@/components/ContactBar'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://nova-bathtub.ru'),
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#f97316" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nova Bathtub" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="canonical" href="https://nova-bathtub.ru" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
              },
              "sameAs": [
                "https://nova-bathtub.ru"
              ]
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