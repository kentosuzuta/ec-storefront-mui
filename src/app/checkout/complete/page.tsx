import { CheckoutCompletePageView } from "@/features/checkout/CheckoutCompletePageView";

export default async function CompletePage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; paid?: string }>;
}) {
  const { orderId, paid } = await searchParams;
  const paidAmount = Number(paid ?? "9990");

  return <CheckoutCompletePageView orderId={orderId} paidAmount={paidAmount} />;
}
