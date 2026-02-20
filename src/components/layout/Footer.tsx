"use client";

import Link from "next/link";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/checkout")) {
    return null;
  }

  return (
    <Box sx={{ mt: 4, backgroundColor: "#272727", color: "#fff", pt: "60px", borderTop: "4px solid #56B280" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                Candleaf
              </Typography>
              <Typography sx={{ color: "#C8C8C8" }}>
                Your natural candle made for your home and for your wellness.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 4 }}>
                <Stack spacing={1}>
                  <Typography sx={{ color: "#56B280" }}>Discovery</Typography>
                  <Link href="/products">New season</Link>
                  <Link href="/products">Most searched</Link>
                  <Link href="/products">Most selled</Link>
                </Stack>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Stack spacing={1}>
                  <Typography sx={{ color: "#56B280" }}>About</Typography>
                  <Link href="/checkout">Help</Link>
                  <Link href="/checkout">Shipping</Link>
                  <Link href="/checkout">Affiliate</Link>
                </Stack>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Stack spacing={1}>
                  <Typography sx={{ color: "#56B280" }}>Info</Typography>
                  <Link href="/checkout">Contact us</Link>
                  <Link href="/checkout">Privacy Policies</Link>
                  <Link href="/checkout">Terms &amp; Conditions</Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={1}
          sx={{ py: 3, mt: 6, borderTop: "1px solid rgba(255,255,255,0.15)", color: "#B9B9B9" }}
        >
          <Typography variant="body2">©Candleaf All Rights Reserved.</Typography>
          <Typography variant="body2">Designed with ❤️ by uxbly</Typography>
        </Stack>
      </Container>
    </Box>
  );
};
