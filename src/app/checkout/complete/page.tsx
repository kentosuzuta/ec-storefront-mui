import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";

export default async function CompletePage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; paid?: string }>;
}) {
  const { orderId, paid } = await searchParams;
  const paidAmount = Number(paid ?? "9990");

  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      <Grid container>
        <Grid size={{ xs: 12, lg: 7 }} sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
          <Stack spacing={2.5} sx={{ maxWidth: 540, mx: "auto", alignItems: "center", textAlign: "center" }}>
            <CheckoutSteps current="payment" />
            <Box sx={{ color: "#56B281", mt: 2 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 100 }} />
            </Box>
            <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", fontSize: 26, color: "#272727" }}>
              Payment Confirmed
            </Typography>
            <Typography sx={{ color: "#56B281", fontSize: 14 }}>ORDER #{orderId ?? "2039"}</Typography>
            <Typography sx={{ color: "#656565", fontSize: 14, maxWidth: 540 }}>
              Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your order
              is confirmed it will be ready to ship in 2 days. Please check your inbox in the
              future for your order updates.
            </Typography>
            <Button component={Link} href="/products" variant="contained" sx={{ width: 249, height: 40, borderRadius: 0, fontSize: 20 }}>
              Back to shopping
            </Button>
            <Typography component={Link} href="/checkout/complete" sx={{ color: "#56B281", textDecoration: "underline", fontSize: 18 }}>
              Print receipt
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <CheckoutSummary subtotal={paidAmount} shippingLabel="Free Shipping" totalLabel="Paid" totalColor="#56B281" showCoupon={false} />
        </Grid>
      </Grid>
    </Container>
  );
}
