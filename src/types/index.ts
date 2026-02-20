export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  categoryId: string;
  stock: number;
  rating?: number;
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
  unitPrice: number;
  name: string;
  image: string;
  stock: number;
};
