import BagPage from "./BagPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bag",
  description: "FashionFusion bag page where items are stored for payment.",
};

function Bag() {
  return <BagPage />;
}

export default Bag;
