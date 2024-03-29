import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "FashionFusion",
  description: "FashionFusion clothing e-commerce website built with NextJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
