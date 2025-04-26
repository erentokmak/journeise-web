import { IBarber, IGalleryImage } from '@/types/barber.types'

export const BARBERS: IBarber[] = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    experience: 8,
    services: [
      {
        id: 1,
        name: 'Schengen Vizesi',
        duration: 60,
        price: 1200
      },
      {
        id: 2,
        name: 'Amerika Vizesi',
        duration: 60,
        price: 1500
      },
      {
        id: 3,
        name: 'İngiltere Vizesi',
        duration: 60,
        price: 1800
      }
    ]
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    experience: 5,
    services: [
      {
        id: 1,
        name: 'Schengen Vizesi',
        duration: 60,
        price: 1200
      },
      {
        id: 2,
        name: 'Amerika Vizesi',
        duration: 60,
        price: 1500
      },
      {
        id: 3,
        name: 'İngiltere Vizesi',
        duration: 60,
        price: 1800
      }
    ]
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    experience: 10,
    services: [
      {
        id: 1,
        name: 'Schengen Vizesi',
        duration: 60,
        price: 1200
      },
      {
        id: 2,
        name: 'Amerika Vizesi',
        duration: 60,
        price: 1500
      },
      {
        id: 3,
        name: 'İngiltere Vizesi',
        duration: 60,
        price: 1800
      }
    ]
  }
]

export const GALLERY_IMAGES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    title: 'Vize Danışmanlığı',
    description: 'Profesyonel vize danışmanlığı hizmetleri'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    title: 'Vize Başvurusu',
    description: 'Hızlı ve güvenilir vize başvuru süreci'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80',
    title: 'Vize Danışmanlığı',
    description: 'Uzman kadromuzla vize danışmanlığı'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
    title: 'Vize Danışmanlığı',
    description: 'Profesyonel vize danışmanlığı hizmetleri'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    title: 'Vize Başvurusu',
    description: 'Hızlı ve güvenilir vize başvuru süreci'
  }
]

export const AVAILABLE_HOURS = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
]
