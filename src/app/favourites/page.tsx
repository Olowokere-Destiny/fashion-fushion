import { Metadata } from "next";
import Favourites from "./FavPage";
export const metadata: Metadata = {
  title: "Favourites",
  description: "FashionFusion favourites page.",
};
function FavPage() {
  return <Favourites />;
}

export default FavPage;
