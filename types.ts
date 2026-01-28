
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  imageUrl: string;
  availabilityDate?: string;
  isNew?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  type: 'Demolition' | 'Roofing';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
