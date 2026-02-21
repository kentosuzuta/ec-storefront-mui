import { Suspense } from "react";
import { Container, Typography } from "@mui/material";
import { ProductsPageClient } from "@/features/products/ProductsPageClient";

export const ProductsPageView = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Suspense fallback={<Typography>Loading products...</Typography>}>
        <ProductsPageClient />
      </Suspense>
    </Container>
  );
};
