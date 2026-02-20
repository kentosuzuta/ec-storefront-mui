"use client";

import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useCart } from "@/features/cart/CartContext";

export const Header = () => {
  const { totalCount } = useCart();

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid #e5e5e5", height: 75, justifyContent: "center" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: "75px !important" }}>
          <Typography variant="h6" fontWeight={700}>
            <Link href="/">Candleaf</Link>
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
              <Link href="/products">Discovery</Link>
              <Link href="/checkout">About</Link>
              <Link href="/checkout">Contact us</Link>
            </Stack>
            <IconButton aria-label="profile">
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <Link href="/cart" aria-label="Open cart">
              <IconButton>
                <Badge badgeContent={totalCount} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
