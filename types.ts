export interface Experience {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  price: number;
  image: string;
  category: 'Tours' | 'Transport' | 'Food' | 'Attractions';
  duration?: string;
  badges?: string[];
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  favoriteSpot: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface FAQ {
  id: string;
  question: string;
}
