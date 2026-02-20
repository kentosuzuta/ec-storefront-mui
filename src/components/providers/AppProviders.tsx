"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CartProvider } from "@/features/cart/CartContext";
import { appTheme } from "@/theme/theme";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <CartProvider>{children}</CartProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
