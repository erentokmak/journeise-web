import { IBarber, IGalleryImage } from '@/types/barber.types';

export const BARBERS: IBarber[] = [
  {
    id: 1,
    name: "Ahmet Usta",
    image: "/assets/images/barber-images/SEBEBCI.jpg",
    experience: 10,
    services: [
      { id: 1, name: "Saç Kesimi", duration: 30, price: 150 },
      { id: 2, name: "Sakal Kesimi", duration: 20, price: 100 },
      { id: 3, name: "Saç & Sakal Kesimi", duration: 45, price: 200 },
    ],
  },
  {
    id: 2,
    name: "Mehmet Usta",
    image: "/assets/images/barber-images/SEBEBCI.jpg",
    experience: 8,
    services: [
      { id: 1, name: "Saç Kesimi", duration: 30, price: 150 },
      { id: 2, name: "Sakal Kesimi", duration: 20, price: 100 },
      { id: 3, name: "Saç & Sakal Kesimi", duration: 45, price: 200 },
    ],
  },
  {
    id: 3,
    name: "Ali Usta",
    image: "/assets/images/barber-images/SEBEBCI.jpg",
    experience: 15,
    services: [
      { id: 1, name: "Saç Kesimi", duration: 30, price: 150 },
      { id: 2, name: "Sakal Kesimi", duration: 20, price: 100 },
      { id: 3, name: "Saç & Sakal Kesimi", duration: 45, price: 200 },
    ],
  },
];

export const GALLERY_IMAGES: IGalleryImage[] = [
  {
    id: 1,
    src: "/assets/images/gallery-images/1.jpg",
    alt: "Berber Dükkanı",
  },
  {
    id: 2,
    src: "/assets/images/gallery-images/1.jpg",
    alt: "Berber Dükkanı",
  },
  {
    id: 3,
    src: "/assets/images/gallery-images/1.jpg",
    alt: "Berber Dükkanı",
  },
];

export const AVAILABLE_HOURS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00"
]; 