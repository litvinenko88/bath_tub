import { NextResponse } from 'next/server'

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://nova-bathtub.ru</loc>
    <image:image>
      <image:loc>https://nova-bathtub.ru/images/products/shan%201.jpg</image:loc>
      <image:title>Банный чан Алтай 6 граней</image:title>
      <image:caption>Банный чан из кедра на 4 человека диаметром 1700мм</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://nova-bathtub.ru/images/products/shan%202.jpg</image:loc>
      <image:title>Банный чан Сибирь 8 граней</image:title>
      <image:caption>Банный чан из кедра на 6 человек диаметром 1900мм</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://nova-bathtub.ru/images/products/shan%203.jpg</image:loc>
      <image:title>Банный чан Тайга 10 граней</image:title>
      <image:caption>Банный чан из кедра на 10 человек диаметром 2300мм</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://nova-bathtub.ru/images/glavn-fonts.jpg</image:loc>
      <image:title>Банный чан с подогревом под открытым небом</image:title>
      <image:caption>Банные чаны премиум класса от производителя</image:caption>
    </image:image>
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}