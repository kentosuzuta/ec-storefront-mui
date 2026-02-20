import { Product } from "@/types";

export type SortOption = "newest" | "priceAsc" | "priceDesc";

export type ProductFilter = {
  keyword: string;
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
  sort: SortOption;
};

export const filterProducts = (items: Product[], filter: ProductFilter) => {
  const keyword = filter.keyword.trim().toLowerCase();

  const filtered = items.filter((item) => {
    if (filter.category !== "all" && item.categoryId !== filter.category) {
      return false;
    }

    if (keyword && !item.name.toLowerCase().includes(keyword)) {
      return false;
    }

    if (filter.minPrice !== null && item.price < filter.minPrice) {
      return false;
    }

    if (filter.maxPrice !== null && item.price > filter.maxPrice) {
      return false;
    }

    return true;
  });

  return [...filtered].sort((a, b) => {
    if (filter.sort === "priceAsc") {
      return a.price - b.price;
    }

    if (filter.sort === "priceDesc") {
      return b.price - a.price;
    }

    return +new Date(b.createdAt) - +new Date(a.createdAt);
  });
};

export const formatJPY = (amount: number) =>
  new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(amount);
