export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

export interface ClientLocation {
  id: string;
  country: string;
  city: string;
  lat: number;
  lng: number;
  industry: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}
