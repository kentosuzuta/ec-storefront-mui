"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useCart } from "@/features/cart/CartContext";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { getCheckoutInfo } from "@/features/checkout/storage";

export const CheckoutShippingPageView = () => {
  const router = useRouter();
  const { subtotal } = useCart();
  const info = useMemo(() => getCheckoutInfo(), []);

  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      <Grid container>
        <Grid size={{ xs: 12, lg: 7 }} sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
          <Stack spacing={3} sx={{ maxWidth: 445, mx: "auto" }}>
            <CheckoutSteps current="shipping" />

            <Paper variant="outlined" sx={{ borderRadius: 2, p: 2 }}>
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between"><Typography color="#808080">Contact</Typography><Typography>{info.email}</Typography><Typography color="#56B281">Edit</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography color="#808080">Ship to</Typography><Typography>{info.address}</Typography><Typography color="#56B281">Edit</Typography></Stack>
              </Stack>
            </Paper>

            <Typography sx={{ fontSize: 20 }}>Shipping method</Typography>
            <Paper variant="outlined" sx={{ borderRadius: 2, p: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Standard Shipping</Typography>
                <Typography fontWeight={700}>Free</Typography>
              </Stack>
            </Paper>

            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1 }}>
              <Typography component={Link} href="/checkout" sx={{ color: "#56B281", textDecoration: "underline", fontSize: 18 }}>
                Back to details
              </Typography>
              <Button variant="contained" sx={{ width: 223, height: 40, borderRadius: 0, fontSize: 20 }} onClick={() => router.push("/checkout/payment")}>
                Go to payment
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <CheckoutSummary subtotal={subtotal} shippingLabel="Free Shipping" totalLabel="Total" />
        </Grid>
      </Grid>
    </Container>
  );
};
