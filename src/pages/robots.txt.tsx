import { GetServerSideProps } from 'next'

const Robots = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = `User-agent: *
Allow: /
Allow: /about
Allow: /countries
Allow: /blog
Allow: /faq
Allow: /contact
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /auth/

Sitemap: https://journeise.com/sitemap.xml
`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robotsTxt)
  res.end()

  return {
    props: {},
  }
}

export default Robots 