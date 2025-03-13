export interface IBarber {
  id: number;
  name: string;
  image: string;
  experience: number;
  services: IService[];
}

export interface IService {
  id: number;
  name: string;
  duration: number; // dakika cinsinden
  price: number;
}

export interface ITimeSlot {
  time: string;
  isAvailable: boolean;
}

export interface IReservation {
  barberId: number;
  serviceId: number;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

export interface IGalleryImage {
  id: number;
  src: string;
  alt: string;
} 