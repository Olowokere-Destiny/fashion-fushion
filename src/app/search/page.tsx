"use client";
import ItemCard from "@/components/ItemCard";
import { useSearchQuery } from "@/redux/fetchData/service";
import { ItemProps, ItemCardData } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { ScaleLoader } from "react-spinners";

function Search() {
  const [queryString, setQueryString] = useState<string | null>();
  const searchParams = useSearchParams().get("q");
  useEffect(() => {
    setQueryString(searchParams);
  }, [searchParams]);

  const [results, setResults] = useState<ItemProps[]>();
  const { data, isLoading, isError } = useSearchQuery(queryString as string);
  const returnedData: ItemCardData = data;
  useEffect(() => {
    setResults(returnedData?.data.products);
  }, [returnedData?.data.products]);

  // let dummyArray = new Array(72).fill(0).map((_, i) => i + 1);
  return (
    <Suspense>
      <div className="padding">
        {isLoading && (
          <div className="h-screen flex items-center justify-center">
            <ScaleLoader color={"#024e82"} />
          </div>
        )}
        {isError && (
          <div className="h-screen flex items-center justify-center">
            <p className="text-center text-[1rem] font-semibold text-red-500">
              An error occured.
            </p>
          </div>
        )}
        {
          Array.isArray(results) && results.length < 1 && (
            <div className="h-screen flex items-center justify-center">
            <p className="text-center text-[1rem] font-semibold text-red-500">
              No products found.
            </p>
          </div>
          )
        }
        {Array.isArray(results) && results.length > 0 && (
          <h1 className="my-6 text-center ">
            Search results for:{" "}
            <span className="font-semibold text-[1rem] capitalize">
              {queryString}
            </span>
          </h1>
        )}
        <div className="min-h-screen gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.isArray(results) && results.length > 0 &&
            results.map((item, i) => (
              <ItemCard
                imageUrl={item.imageUrl}
                id={item.id}
                url={item.url}
                key={i}
                additionalImageUrls={item.additionalImageUrls[0]}
                name={item.name}
                brandName={item.brandName}
                prevPrice={item.price.previous?.text}
                price={item.price?.current?.text}
              />
            ))}
          {/* {dummyArray.map((_, i) => (
        <ItemCard
          imageUrl="images.asos-media.com/products/pullbear-faux-leather-aviator-jacket-with-shearling-lining-in-black/205797573-1-black"
          id={123456}
          url="Hello"
          key={i}
          additionalImageUrls=""
          name="Pull&Bear faux leather aviator jacket with shearling lining in black"
          price="$100"
          prevPrice="$90"
          brandName="Pull&Bear"
        />
      ))} */}
        </div>
      </div>
    </Suspense>
  );
}

export default Search;
