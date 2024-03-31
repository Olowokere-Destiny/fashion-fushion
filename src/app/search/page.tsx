"use client";
import ItemCard from "@/components/ItemCard";
import { useSearchQuery } from "@/redux/fetchData/service";
import { ItemProps, ItemCardData } from "@/utils/types";
import { useEffect, useState } from "react";

function Search() {
  const [results, setResults] = useState<ItemProps[]>();
  const { data, isLoading } = useSearchQuery("shearling jacket");
  const returnedData: ItemCardData = data;
  useEffect(() => {
    returnedData && setResults(returnedData?.data.products);
  }, []);
  {isLoading && (
    <div className="h-screen flex items-center justify-center">
      <p>Loading...</p>
    </div>
  )}
  return (
    <div className="padding gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-4">
      {Array.isArray(results) &&
        results.map((item, i) => (
          <ItemCard
            imageUrl={item.imageUrl}
            id={item.id}
            url={item.url}
            key={i}
            additionalImageUrls={item.additionalImageUrls[0]}
            name={item.name}
            brandName={item.brandName}
            price={item.price?.current?.text}
          />
        ))}
      {/* <ItemCard
        imageUrl="images.asos-media.com/products/pullbear-faux-leather-aviator-jacket-with-shearling-lining-in-black/205797573-1-black"
        name="Pull&Bear faux leather aviator jacket with shearling lining in black"
        price="$100"
        brandName="Pull&Bear"
      /> */}
    </div>
  );
}

export default Search;
