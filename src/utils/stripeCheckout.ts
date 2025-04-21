import { CheckoutProps } from "./types";

export default async function stripeCheckout({ lineItems }: CheckoutProps) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lineItems }),
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert(data.error || "Unable to create checkout session");
  }
}