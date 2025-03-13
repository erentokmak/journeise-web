export interface IBarber {
  id: number;
  name: string;
  image: string;
  experience: number;
  rating: number;
  totalRatings: number;
  description: string;
  specialties: string[];
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
} 