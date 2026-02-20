import Image from "next/image";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const FIGMA_SUMMARY_IMAGE =
  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c0b73ff-6825-4b9e-b73c-48d9c922c74a";

const asUsd = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 1000);

export const CheckoutSummary = ({
  subtotal,
  shippingLabel,
  totalLabel,
  totalColor = "#272727",
  showCoupon = true,
}: {
  subtotal: number;
  shippingLabel: string;
  totalLabel: "Total" | "Paid";
  totalColor?: string;
  showCoupon?: boolean;
}) => {
  return (
    <Box sx={{ bgcolor: "#f2f2f2", minHeight: 745, px: 8, py: 7 }}>
      <Stack spacing={2.5}>
        <Stack direction="row" spacing={2.5} alignItems="center">
          <Box sx={{ width: 160, height: 130, bgcolor: "#F7F8FA", position: "relative" }}>
            <Image src={FIGMA_SUMMARY_IMAGE} alt="product" fill style={{ objectFit: "contain", padding: "6px 0" }} sizes="160px" />
            <Box
              sx={{
                position: "absolute",
                right: -10,
                top: -10,
                width: 22,
                height: 22,
                borderRadius: "50%",
                bgcolor: "#56B281",
                color: "#fff",
                fontSize: 12,
                display: "grid",
                placeItems: "center",
              }}
            >
              1
            </Box>
          </Box>
          <Stack flexGrow={1}>
            <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", fontSize: 16, color: "#272727" }}>
              Spiced Mint Candleaf®
            </Typography>
            <Typography sx={{ fontFamily: "Poppins, Arial, sans-serif", fontWeight: 600, fontSize: 21, color: "#56B281" }}>
              {asUsd(subtotal)}
            </Typography>
          </Stack>
        </Stack>

        {showCoupon ? (
          <Stack direction="row" spacing={1}>
            <Box sx={{ flexGrow: 1, height: 40, bgcolor: "#fff", border: "1px solid #898989", px: 1.5, display: "flex", alignItems: "center", color: "#616161", fontSize: 14 }}>
              Coupon code
            </Box>
            <Button variant="contained" sx={{ height: 40, borderRadius: 0, bgcolor: "#8a8a8a" }}>Add code</Button>
          </Stack>
        ) : null}

        <Divider />

        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ color: "#616161", fontSize: 14 }}>Subtotal</Typography>
            <Typography sx={{ color: "#272727", fontSize: 24 }}>{asUsd(subtotal)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ color: "#616161", fontSize: 14 }}>Shipping</Typography>
            <Typography sx={{ color: "#272727", fontSize: 14 }}>{shippingLabel}</Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ color: "#616161", fontSize: 14 }}>{totalLabel}</Typography>
          <Typography sx={{ color: totalColor, fontSize: 14 }}>{asUsd(subtotal)}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
