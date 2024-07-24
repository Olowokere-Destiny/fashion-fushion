import { Arimo, Nunito, Titillium_Web, Outfit } from "next/font/google";
const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "300", "700"],
});
const titillium = Titillium_Web({
  subsets: ["latin", ],
  weight: ["300", "200", "400", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin", ],
  weight: ["300", "200", "400", "600", "700"],
});

export { arimo, nunito, titillium, outfit };
