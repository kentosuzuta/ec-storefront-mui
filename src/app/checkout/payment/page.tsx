"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, Grid, Paper, Radio, Stack, TextField, Typography } from "@mui/material";
import { useCart } from "@/features/cart/CartContext";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { getCheckoutInfo } from "@/features/checkout/storage";

export default function PaymentPage() {
  const router = useRouter();
  const { subtotal, clearCart } = useCart();
  const info = useMemo(() => getCheckoutInfo(), []);

  const completeOrder = () => {
    const orderId = `ORD-${Math.max(1000, Math.floor(subtotal / 10))}`;
    router.push(`/checkout/complete?orderId=${orderId}&paid=${subtotal}`);
    clearCart();
  };

  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      <Grid container>
        <Grid size={{ xs: 12, lg: 7 }} sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
          <Stack spacing={3} sx={{ maxWidth: 445, mx: "auto" }}>
            <CheckoutSteps current="payment" />

            <Paper variant="outlined" sx={{ borderRadius: 2, p: 2 }}>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between"><Typography color="#808080">Contact</Typography><Typography>{info.email}</Typography><Typography color="#56B281">Edit</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography color="#808080">Ship to</Typography><Typography>{info.address}</Typography><Typography color="#56B281">Edit</Typography></Stack>
                <Stack direction="row" justifyContent="space-between"><Typography color="#808080">Method</Typography><Typography>Standard Shipping - FREE</Typography><Typography color="#56B281">Edit</Typography></Stack>
              </Stack>
            </Paper>

            <Typography sx={{ fontSize: 20 }}>Payment method</Typography>
            <Paper variant="outlined" sx={{ borderRadius: 2, p: 2, borderColor: "#56B281" }}>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center"><Radio checked size="small" sx={{ p: 0 }} /><Typography color="#56B281" fontWeight={700}>Credit Card</Typography></Stack>
                <TextField placeholder="Card Number" />
                <TextField placeholder="Holder Name" />
                <Stack direction="row" spacing={1.5}><TextField fullWidth placeholder="Expiration (MM/YY)" /><TextField fullWidth placeholder="CVV" /></Stack>
              </Stack>
            </Paper>

            <Typography sx={{ fontSize: 20 }}>Tax Informations</Typography>
            <Stack direction="row" spacing={1.5}><TextField fullWidth placeholder="VAT number  (optional)" /><TextField fullWidth placeholder="PEC (optional)" /></Stack>

            <Typography sx={{ fontSize: 20 }}>Billing address</Typography>
            <Paper variant="outlined" sx={{ borderRadius: 2 }}>
              <Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 2, py: 1.2, borderBottom: "1px solid #eee" }}><Radio checked size="small" sx={{ p: 0 }} /><Typography>Same as the shipping address</Typography></Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 2, py: 1.2 }}><Radio size="small" sx={{ p: 0 }} /><Typography>Use a different address for billing</Typography></Stack>
              </Stack>
            </Paper>

            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1 }}>
              <Typography component={Link} href="/checkout/shipping" sx={{ color: "#56B281", textDecoration: "underline", fontSize: 18 }}>
                Back to shipping
              </Typography>
              <Button variant="contained" sx={{ width: 166, height: 40, borderRadius: 0, fontSize: 20 }} onClick={completeOrder}>
                Pay now
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
}
