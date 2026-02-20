"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ProductCard } from "@/components/ui/ProductCard";
import { categories } from "@/lib/mock/categories";
import { products } from "@/lib/mock/products";
import { filterProducts, SortOption } from "@/features/products/product-utils";

const PAGE_SIZE = 8;

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "新着" },
  { value: "priceAsc", label: "価格: 安い順" },
  { value: "priceDesc", label: "価格: 高い順" },
];

export const ProductsPageClient = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const keyword = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "all";
  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const sort = (searchParams.get("sort") as SortOption) ?? "newest";
  const currentPage = Number(searchParams.get("page") ?? "1");

  const filtered = useMemo(
    () =>
      filterProducts(products, {
        keyword,
        category,
        minPrice: minPrice ? Number(minPrice) : null,
        maxPrice: maxPrice ? Number(maxPrice) : null,
        sort,
      }),
    [category, keyword, maxPrice, minPrice, sort],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(currentPage, pageCount);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    if (key !== "page") {
      params.set("page", "1");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack spacing={3}>
      <Typography variant="h4">商品一覧</Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="キーワード検索"
            value={keyword}
            onChange={(event) => updateQuery("q", event.target.value)}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="category-select">カテゴリ</InputLabel>
            <Select
              labelId="category-select"
              label="カテゴリ"
              value={category}
              onChange={(event) => updateQuery("category", event.target.value)}
            >
              {categories.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 3, md: 2 }}>
          <TextField
            type="number"
            fullWidth
            label="最低価格"
            value={minPrice}
            onChange={(event) => updateQuery("minPrice", event.target.value)}
          />
        </Grid>
        <Grid size={{ xs: 3, md: 2 }}>
          <TextField
            type="number"
            fullWidth
            label="最高価格"
            value={maxPrice}
            onChange={(event) => updateQuery("maxPrice", event.target.value)}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="sort-select">並び替え</InputLabel>
            <Select
              labelId="sort-select"
              label="並び替え"
              value={sort}
              onChange={(event) => updateQuery("sort", event.target.value)}
            >
              {SORT_OPTIONS.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Typography color="text.secondary">{filtered.length} 件ヒット</Typography>

      <Grid container spacing={2}>
        {pageItems.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" pt={2}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => updateQuery("page", String(value))}
          color="primary"
        />
      </Box>
    </Stack>
  );
};
