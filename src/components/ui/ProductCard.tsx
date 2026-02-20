import { formatJPY } from "@/features/products/product-utils";
import { Product } from "@/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia sx={{ position: "relative", bgcolor: "#f7f7f7", height: 180 }}>
        <Image
          src={product.images[0] ?? "/file.svg"}
          alt={product.name}
          fill
          style={{ objectFit: "contain", padding: 24 }}
        />
      </CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1}>
          <Typography variant="h6" fontSize={18}>
            {product.name}
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            {product.description}
          </Typography>
          <Typography fontWeight={700}>{formatJPY(product.price)}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          href={`/products/${product.id}`}
          size="small"
          variant="contained"
          fullWidth
        >
          商品を見る
        </Button>
      </CardActions>
    </Card>
  );
};
