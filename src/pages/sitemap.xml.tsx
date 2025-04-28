import { GetServerSideProps } from 'next'
import { COUNTRIES } from '@/constants/countries'

const Sitemap = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://journeise.com'

  // Statik sayfalar
  const staticPages = [
    '',
    '/about',
    '/countries',
    '/blog',
    '/faq',
    '/contact',
    '/reservation',
    '/privacy-policy',
    '/terms'
  ]

  // Dinamik ülke slug'ları
  const countryPages = COUNTRIES.map(
    c => `/countries/${c.name.toLowerCase().replace(/\\s+/g, '-')}`
  )

  // Tüm sayfalar
  const allPages = [
    ...staticPages,
    ...countryPages
  ]

  const sitemap = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
  ${allPages
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${url === '' ? '1.0' : '0.8'}</priority>
    </url>
  `
    )
    .join('')}
</urlset>
`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default Sitemap 