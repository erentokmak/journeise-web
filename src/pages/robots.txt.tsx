import { GetServerSideProps } from 'next'

const Robots = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/

Sitemap: https://1barbers.com/sitemap.xml
`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robotsTxt)
  res.end()

  return {
    props: {},
  }
}

export default Robots 