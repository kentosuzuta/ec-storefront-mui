export type CheckoutInfo = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  province: string;
  country: string;
  note: string;
  saveInfo: boolean;
  newsletter: boolean;
};

const KEY = "checkout-info";

export const defaultCheckoutInfo: CheckoutInfo = {
  email: "joe.spagnuolo@uxbly.com",
  firstName: "Joe",
  lastName: "Spagnuolo",
  address: "Via Firenze 23, 92023, Campobello di Licata AG, Italia",
  city: "Campobello di Licata",
  postalCode: "92023",
  province: "AG",
  country: "Italy",
  note: "",
  saveInfo: true,
  newsletter: true,
};

export const getCheckoutInfo = (): CheckoutInfo => {
  if (typeof window === "undefined") {
    return defaultCheckoutInfo;
  }

  const raw = window.localStorage.getItem(KEY);
  if (!raw) {
    return defaultCheckoutInfo;
  }

  try {
    return { ...defaultCheckoutInfo, ...(JSON.parse(raw) as Partial<CheckoutInfo>) };
  } catch {
    return defaultCheckoutInfo;
  }
};

export const setCheckoutInfo = (value: CheckoutInfo) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(KEY, JSON.stringify(value));
};
