import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a1a1a",
    },
    secondary: {
      main: "#2f6fed",
    },
    background: {
      default: "#f6f6f6",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
    },
  },
});
