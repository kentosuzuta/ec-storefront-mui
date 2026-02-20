"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "@/features/cart/CartContext";

const FIGMA_CART_IMAGE =
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c0b73ff-6825-4b9e-b73c-48d9c922c74a";

const asUsd = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 1000);

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <Container maxWidth="lg" sx={{ py: "58px" }}>
      <Stack spacing={2.5} alignItems="center">
        <Typography
          sx={{
            fontFamily: "Poppins, Arial, sans-serif",
            fontSize: 26,
            lineHeight: "57.6px",
            color: "#272727",
          }}
        >
          Your cart items
        </Typography>

        <Typography
          component={Link}
          href="/products"
          sx={{
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: 18,
            lineHeight: "25.6px",
            color: "#56B281",
            textDecoration: "underline",
          }}
        >
          Back to shopping
        </Typography>

        {items.length === 0 ? (
          <Stack alignItems="center" spacing={2} sx={{ py: 8 }}>
            <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", color: "#616161" }}>
              Your cart is empty.
            </Typography>
            <Button href="/products" variant="contained" sx={{ width: 183, height: 40, borderRadius: 0 }}>
              Shop now
            </Button>
          </Stack>
        ) : (
          <>
            <Box sx={{ width: "100%", mt: 1 }}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  px: 0,
                  pb: 1,
                  borderBottom: "1px solid #E5E5E5",
                }}
              >
                <Typography sx={{ width: 255, fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 16 }}>
                  Product
                </Typography>
                <Typography sx={{ width: 160, fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 16 }}>
                  Price
                </Typography>
                <Typography sx={{ width: 95, fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 16 }}>
                  Quantity
                </Typography>
                <Typography sx={{ width: 95, fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 16 }}>
                  Total
                </Typography>
              </Stack>

              {items.map((item) => (
                <Stack
                  key={item.productId}
                  direction="row"
                  alignItems="center"
                  sx={{
                    minHeight: 134,
                    borderBottom: "1px solid #E5E5E5",
                    py: 2,
                  }}
                >
                  <Stack direction="row" spacing={2.5} sx={{ width: 255 }} alignItems="center">
                    <Box sx={{ width: 160, height: 130, bgcolor: "#F7F8FA", position: "relative", flexShrink: 0 }}>
                      <Image
                        src={FIGMA_CART_IMAGE}
                        alt={item.name}
                        fill
                        style={{ objectFit: "contain", padding: "6px 0" }}
                        sizes="160px"
                      />
                    </Box>
                    <Stack>
                      <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", fontSize: 26, color: "#272727" }}>
                        {item.name}
                      </Typography>
                      <Typography
                        component="button"
                        onClick={() => removeItem(item.productId)}
                        sx={{
                          p: 0,
                          border: 0,
                          background: "transparent",
                          textAlign: "left",
                          cursor: "pointer",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 18,
                          color: "#56B281",
                          textDecoration: "underline",
                        }}
                      >
                        Remove
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography sx={{ width: 160, fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 18, color: "#272727" }}>
                    {asUsd(item.unitPrice)}
                  </Typography>

                  <Stack spacing={1} sx={{ width: 95 }} alignItems="flex-start">
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
                        onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                        aria-label="decrease quantity"
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 18 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.productId, Math.min(item.stock, item.quantity + 1))}
                        aria-label="increase quantity"
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Stack>

                  <Typography sx={{ width: 95, fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 18, color: "#272727" }}>
                    {asUsd(item.unitPrice * item.quantity)}
                  </Typography>
                </Stack>
              ))}
            </Box>

            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={7}
              sx={{ width: "100%", pt: 2 }}
            >
              <Stack spacing={0.5} sx={{ width: 350 }}>
                <Stack direction="row" justifyContent="flex-end" spacing={1}>
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 20 }}>
                    Sub-total
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto, Arial, sans-serif", fontWeight: 500, fontSize: 20 }}>
                    {asUsd(subtotal)}
                  </Typography>
                </Stack>
                <Typography sx={{ textAlign: "right", fontFamily: "Roboto, Arial, sans-serif", fontSize: 16, color: "#9E9E9E" }}>
                  Tax and shipping cost will be calculated later
                </Typography>
              </Stack>

              <Button
                component={Link}
                href="/checkout"
                variant="contained"
                sx={{ width: 183, height: 40, borderRadius: 0, fontFamily: "Roboto, Arial, sans-serif", fontSize: 20 }}
              >
                Check-out
              </Button>
            </Stack>
          </>
        )}
      </Stack>
    </Container>
  );
}
