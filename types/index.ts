export type Category = {
  id: string;
  name: string;
  description: string;
  slug: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isHit?: boolean;
  discount?: number;
  colors: string[];
  sizes: string[];
  specs: Array<{ label: string; value: string }>;
  images: string[];
};

export type Review = {
  id: string;
  author: string;
  city: string;
  rating: number;
  text: string;
  productSlug?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
  color?: string;
  size?: string;
};
