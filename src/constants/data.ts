import { IBarber, IGalleryImage } from '@/types/barber.types'

export const BARBERS: IBarber[] = [
  {
    id: 1,
    name: '1',
    image: '/assets/images/barber-images/1.JPG',
    experience: 2,
    services: [
      { id: 3, name: 'Saç & Sakal Kesimi', duration: 45, price: 1000 },
    ],
  },
]

export const GALLERY_IMAGES: IGalleryImage[] = [
  {
    id: 1,
    src: '/assets/images/gallery-images/1.jpg',
    alt: 'Dükkan - Dış',
  },
  {
    id: 2,
    src: '/assets/images/gallery-images/2.jpg',
    alt: 'Dükkan',
  },
  {
    id: 3,
    src: '/assets/images/gallery-images/3.jpg',
    alt: 'Dükkan',
  },
  {
    id: 4,
    src: '/assets/images/gallery-images/4.jpg',
    alt: 'Dükkan',
  },
  {
    id: 5,
    src: '/assets/images/gallery-images/5.jpg',
    alt: 'Dükkan',
  },
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
