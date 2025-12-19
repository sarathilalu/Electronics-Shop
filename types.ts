
export interface Product {
  id: string;
  name: string;
  category: 'Laptops' | 'Phones' | 'Audio' | 'Gaming' | 'Accessories';
  price: number;
  description: string;
  image: string;
  rating: number;
  specs: Record<string, string>;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type Category = 'All' | 'Laptops' | 'Phones' | 'Audio' | 'Gaming' | 'Accessories';
