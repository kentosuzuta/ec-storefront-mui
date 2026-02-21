"use client";

import { use } from "react";
import { ProductDetailPageView } from "@/features/products/ProductDetailPageView";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <ProductDetailPageView id={id} />;
}
