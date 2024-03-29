import { Arimo, Nunito } from "next/font/google";
const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "300", "700"],
});

export { arimo, nunito };
