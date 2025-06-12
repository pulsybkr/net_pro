import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://eclat-du-nord.fr' // Remplacer par votre domaine réel

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 