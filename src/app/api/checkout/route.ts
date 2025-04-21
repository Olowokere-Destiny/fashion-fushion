import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function POST(req: NextRequest) {
  const { lineItems } = await req.json();

  if (!lineItems || !Array.isArray(lineItems)) {
    return NextResponse.json({ error: "Invalid line items" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name || "Custom Item",
            images: item.image
          },
          unit_amount: item.price * 100, // cents
        },
        quantity: item.quantity || 1,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_PROD_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_PROD_URL}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
