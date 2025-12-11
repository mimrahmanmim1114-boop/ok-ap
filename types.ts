
export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  moq?: string;
  fabric?: string;
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  unit: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
