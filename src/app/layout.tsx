"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";
import store from "@/redux/store";

import { Provider } from "react-redux";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={lato.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
