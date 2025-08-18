import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nova-bathtub.ru',
      lastModified: '2024-01-01',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://nova-bathtub.ru/privacy',
      lastModified: '2024-01-01',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}