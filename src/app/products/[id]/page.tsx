"use client";

import { use, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Radio,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "@/features/cart/CartContext";
import { products } from "@/lib/mock/products";

const FIGMA_PRODUCT_IMAGE =
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/167ca6c3-d1c2-4257-a481-1fdabf7c5195";

const asUsd = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 1000);

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((item) => item.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscribe">("one-time");
  const [deliveryEvery, setDeliveryEvery] = useState("4 weeks");

  if (!product) {
    notFound();
  }

  const price = useMemo(() => asUsd(product.price), [product.price]);

  return (
    <Container maxWidth="lg" sx={{ py: "80px" }}>
      <Grid container spacing={3.75}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2.25}>
            <Box sx={{ width: "100%", maxWidth: 540 }}>
              <Box
                sx={{
                  width: "100%",
                  height: 433,
                  bgcolor: "#F7F8FA",
                  position: "relative",
                }}
              >
                <Box sx={{ position: "absolute", inset: "32px 7px 7px 7px" }}>
                  <Image src={FIGMA_PRODUCT_IMAGE} alt={product.name} fill style={{ objectFit: "contain" }} />
                </Box>
              </Box>
            </Box>
            <Typography
              sx={{
                maxWidth: 540,
                textAlign: "center",
                fontFamily: "Roboto, Arial, sans-serif",
                fontSize: 20,
                lineHeight: "25.6px",
                color: "#1D2530",
                whiteSpace: "pre-line",
              }}
            >
              {"All hand-made with natural soy wax, Candleaf is made for your pleasure moments.\n🚚 FREE SHIPPING"}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={1.5} sx={{ maxWidth: 540 }}>
            <Typography
              sx={{
                fontSize: 26,
                lineHeight: "57.6px",
                color: "#272727",
              }}
            >
              {product.name}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: 600,
                fontSize: 26,
                lineHeight: "57.6px",
                color: "#56B281",
              }}
            >
              {price}
            </Typography>

            <Grid container spacing={2.5} alignItems="end" sx={{ mt: 0.5 }}>
              <Grid size="auto">
                <Stack spacing={1}>
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 18, color: "#272727" }}>
                    Quantity
                  </Typography>
                  <Box
                    sx={{
                      width: 75,
                      height: 36,
                      border: "1px solid #56B280",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 0.25,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                      aria-label="decrease quantity"
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 18 }}>
                      {quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))}
                      aria-label="increase quantity"
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Stack>
              </Grid>

              <Grid size="grow">
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ height: 42, borderRadius: 0, fontFamily: "Roboto, Arial, sans-serif", fontSize: 20 }}
                  disabled={product.stock === 0}
                  onClick={() => addItem(product, quantity)}
                >
                  + Add to cart
                </Button>
              </Grid>
            </Grid>

            <Paper
              variant="outlined"
              sx={{
                mt: 1,
                borderColor: "#E6E6E6",
                borderRadius: "7px",
                p: "20px",
              }}
            >
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Radio
                    checked={purchaseType === "one-time"}
                    onChange={() => setPurchaseType("one-time")}
                    size="small"
                    sx={{ p: 0 }}
                  />
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
                    One time purchase
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                  <Radio
                    checked={purchaseType === "subscribe"}
                    onChange={() => setPurchaseType("subscribe")}
                    size="small"
                    sx={{ p: 0 }}
                  />
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
                    Subscribe and delivery every
                  </Typography>
                  <Select
                    size="small"
                    value={deliveryEvery}
                    onChange={(event) => setDeliveryEvery(event.target.value)}
                    sx={{ minWidth: 110, height: 28, fontSize: 14 }}
                  >
                    <MenuItem value="4 weeks">4 weeks</MenuItem>
                    <MenuItem value="6 weeks">6 weeks</MenuItem>
                    <MenuItem value="8 weeks">8 weeks</MenuItem>
                  </Select>
                </Stack>

                <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 14, color: "#656565" }}>
                  Subscribe now and get the 10% of discount on every recurring order. The discount
                  will be applied at checkout. See details
                </Typography>
              </Stack>
            </Paper>

            <Paper
              variant="outlined"
              sx={{
                borderColor: "#E6E6E6",
                borderRadius: "7px",
                p: "16px 20px",
              }}
            >
              <Stack spacing={0.5}>
                <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
                  <b>Wax:</b> Top grade Soy wax that delivers a smoke less, consistent burn
                </Typography>
                <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
                  <b>Fragrance:</b> Premium quality ingredients with natural essential oils
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
                    <b>Burning Time:</b> 70-75 hours
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
                    <b>Dimension:</b> 10cm x 5cm
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
                    <b>Weight:</b> 400g
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
