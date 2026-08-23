export type ServiceCategory = 
  | 'all'
  | 'business'
  | 'advertising'
  | 'school_office'
  | 'wedding'
  | 'photo'
  | 'custom';

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  suitableFor: string[];
  customizations: string[];
  features: string[];
  popular?: boolean;
  standardTurnaround: string;
  specifications: string;
  iconName: string;
  imageUrl: string;
}

export type PortfolioCategory =
  | 'all'
  | 'visiting_cards'
  | 'id_cards'
  | 'banners'
  | 'stickers'
  | 'wedding'
  | 'photo'
  | 'promotional';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  serviceId: string;
  quantity: string;
  size?: string;
  paperFinish?: string;
  urgency?: string;
  notes: string;
  fileName?: string;
}

export interface BusinessConfig {
  businessName: string;
  businessType: string;
  tagline: string;
  phone1: string;
  phone2: string;
  whatsapp1: string;
  whatsapp2: string;
  address: string;
  cityState: string;
  googleMapsUrl: string;
}
