import { Stack, Typography } from "@mui/material";

type Step = "details" | "shipping" | "payment";

const activeColor = "#272727";
const doneColor = "#56B281";
const upcomingColor = "#616161";

const stepColor = (current: Step, target: Step) => {
  const order = ["details", "shipping", "payment"] as const;
  const c = order.indexOf(current);
  const t = order.indexOf(target);

  if (c === t) return activeColor;
  if (c > t) return doneColor;
  return upcomingColor;
};

export const CheckoutSteps = ({ current }: { current: Step }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 16 }}>
      <Typography sx={{ color: doneColor }}>Cart</Typography>
      <Typography sx={{ color: "#bdbdbd" }}>&gt;</Typography>
      <Typography sx={{ color: stepColor(current, "details") }}>Details</Typography>
      <Typography sx={{ color: "#bdbdbd" }}>&gt;</Typography>
      <Typography sx={{ color: stepColor(current, "shipping") }}>Shipping</Typography>
      <Typography sx={{ color: "#bdbdbd" }}>&gt;</Typography>
      <Typography sx={{ color: stepColor(current, "payment") }}>Payment</Typography>
    </Stack>
  );
};
