import Searchpage from "@/components/SearchPage";
import { Suspense } from "react";
import {Metadata} from "next"
export const metadata: Metadata = {
  description: "Displaying results for searched items on FashionFusion"
}
function SuspenseWrapper() {
  return (
    <Suspense>
      <Searchpage />
    </Suspense>
  );
}

export default SuspenseWrapper;
