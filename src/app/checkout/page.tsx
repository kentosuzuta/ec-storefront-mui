"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Container, FormControlLabel, Grid, Stack, TextField, Typography } from "@mui/material";
import { useCart } from "@/features/cart/CartContext";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { CheckoutInfo, defaultCheckoutInfo, setCheckoutInfo } from "@/features/checkout/storage";

export default function CheckoutDetailsPage() {
  const router = useRouter();
  const { subtotal } = useCart();

  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutInfo>({
    defaultValues: defaultCheckoutInfo,
  });

  const onSubmit = (values: CheckoutInfo) => {
    setCheckoutInfo(values);
    router.push("/checkout/shipping");
  };

  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      <Grid container>
        <Grid size={{ xs: 12, lg: 7 }} sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
          <Stack spacing={3} sx={{ maxWidth: 445, mx: "auto" }}>
            <CheckoutSteps current="details" />

            <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
              <Typography sx={{ fontSize: 20 }}>Contact</Typography>
              <TextField
                placeholder="Email or mobile phone number"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                {...register("email", { required: "Email is required" })}
              />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Add me to Candleaf newsletter for a 10% discount" />

              <Typography sx={{ fontSize: 20, mt: 1 }}>Shipping Address</Typography>
              <Grid container spacing={1.5}>
                <Grid size={6}><TextField fullWidth placeholder="Name" {...register("firstName", { required: true })} /></Grid>
                <Grid size={6}><TextField fullWidth placeholder="Second Name" {...register("lastName", { required: true })} /></Grid>
                <Grid size={12}><TextField fullWidth placeholder="Address and number" {...register("address", { required: true })} /></Grid>
                <Grid size={12}><TextField fullWidth placeholder="Shipping note (optional)" {...register("note")} /></Grid>
                <Grid size={4}><TextField fullWidth placeholder="City" {...register("city", { required: true })} /></Grid>
                <Grid size={4}><TextField fullWidth placeholder="Postal Code" {...register("postalCode", { required: true })} /></Grid>
                <Grid size={4}><TextField fullWidth placeholder="Province" {...register("province", { required: true })} /></Grid>
                <Grid size={12}><TextField fullWidth placeholder="Country/Region" {...register("country", { required: true })} /></Grid>
              </Grid>

              <FormControlLabel control={<Checkbox defaultChecked />} label="Save this informations for a future fast checkout" />

              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1 }}>
                <Typography component={Link} href="/cart" sx={{ color: "#56B281", textDecoration: "underline", fontSize: 18 }}>
                  Back to cart
                </Typography>
                <Button type="submit" variant="contained" sx={{ width: 222, height: 40, borderRadius: 0, fontSize: 20 }}>
                  Go to shipping
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <CheckoutSummary subtotal={subtotal} shippingLabel="Calculated at the next step" totalLabel="Total" />
        </Grid>
      </Grid>
    </Container>
  );
}
