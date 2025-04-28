import { ContactInfo, CountryInfo } from '@/types/contact'

export const CONTACT_INFO: ContactInfo = {
  address: 'Esentepe Mh. Talatpaşa Cd. No:5/1 Levent Şişli/İstanbul Kolektif House',
  phone: '+90 539 715 49 81',
  email: 'info@journeise.com'
}

export const COUNTRY_INFO: CountryInfo[] = [
  {
    name: 'Yunanistan',
    description: 'Antik medeniyetlerin beşiği ve muhteşem adaları',
    details: [
      'Antik Yunan medeniyetinin izleri',
      'Ege ve Akdeniz\'in berrak suları',
      'Geleneksel Yunan mutfağı',
      'Tarihi adalar ve plajlar'
    ]
  },
  {
    name: 'İtalya',
    description: 'Rönesans\'ın doğduğu topraklar ve Akdeniz\'in incisi',
    details: [
      'Rönesans sanatı ve mimarisi',
      'Dünya çapında ünlü mutfak kültürü',
      'Tarihi şehirler ve müzeler',
      'Akdeniz\'in eşsiz sahilleri'
    ]
  }
] 