import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { COUNTRIES } from '@/constants/countries'
import { Input } from '@/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { Button } from '@/ui/button'

const CountriesPage = () => {
  const router = useRouter()
  const { search } = router.query
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')

  // Update search query when URL parameter changes
  useEffect(() => {
    if (search && typeof search === 'string') {
      setSearchQuery(search)
    }
  }, [search])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/countries?search=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push('/countries')
    }
  }

  const filteredCountries = COUNTRIES.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (selectedTab === 'all') return matchesSearch
    if (selectedTab === 'schengen') {
      const schengenCountries = ['Almanya', 'Fransa', 'İtalya', 'İspanya', 'Hollanda', 'Belçika', 'Avusturya', 'İsviçre', 'Yunanistan', 'Portekiz', 'İrlanda', 'Norveç', 'İsveç', 'Danimarka', 'Finlandiya', 'Polonya', 'Çek Cumhuriyeti', 'Macaristan', 'Slovakya']
      return matchesSearch && schengenCountries.includes(country.name)
    }
    return matchesSearch && !['Almanya', 'Fransa', 'İtalya', 'İspanya', 'Hollanda', 'Belçika', 'Avusturya', 'İsviçre', 'Yunanistan', 'Portekiz', 'İrlanda', 'Norveç', 'İsveç', 'Danimarka', 'Finlandiya', 'Polonya', 'Çek Cumhuriyeti', 'Macaristan', 'Slovakya'].includes(country.name)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">Nereye Gitmek İstiyorsunuz?</h1>
        <p className="text-lg text-gray-600 mb-8">
          Size en uygun destinasyonu seçin ve vize başvurunuzu hemen yapın.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <form onSubmit={handleSearch} className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Ülke ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </form>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full md:w-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">Tümü</TabsTrigger>
              <TabsTrigger value="schengen">Schengen</TabsTrigger>
              <TabsTrigger value="non-schengen">Diğer</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/countries/${country.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
                  <div className="relative h-48 w-full">
                    <Image
                      src={country.imageUrl}
                      alt={country.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{country.name}</CardTitle>
                    <CardDescription>{country.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Vize Bilgileri</h3>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          <li>İşlem Süresi: {country.visaInfo.processingTime}</li>
                          <li>Geçerlilik: {country.visaInfo.validity}</li>
                        </ul>
                      </div>
                      <div className="flex items-center text-primary">
                        <span className="text-sm font-medium">Detayları Gör</span>
                        <MoveRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CountriesPage 