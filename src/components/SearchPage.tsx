"use client";
import ItemCard from "@/components/ItemCard";
import {
  useLazyShowMoreQuery,
  useSearchQuery,
} from "@/redux/fetchData/service";
import { ItemProps, ItemCardData } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { ScaleLoader } from "react-spinners";

function Searchpage() {
  const [queryString, setQueryString] = useState<string | null>(null);
  const searchParams = useSearchParams().get("q");
  useEffect(() => {
    setQueryString(searchParams);
  }, [searchParams]);

  const [results, setResults] = useState<ItemProps[]>([]);
  const { data, isFetching, isError } = useSearchQuery(queryString as string);
  const [
    moreFn,
    {
      data: moreProds,
      isFetching: moreFetching,
      isSuccess,
      isError: moreError,
    },
  ] = useLazyShowMoreQuery();
  const [limitReached, setLimitReached] = useState(false);
  const returnedData: ItemCardData = data;
  const moreData: ItemCardData = moreProds;

  useEffect(() => {
    if (returnedData?.data?.products) {
      setResults(returnedData.data.products);
    }
  }, [returnedData]);

  useEffect(() => {
    if (results?.length >= returnedData?.data?.itemCount) {
      setLimitReached(true);
    } else {
      setLimitReached(false);
    }
  }, [results, returnedData]);

  useEffect(() => {
    if (isSuccess && moreData?.data?.products) {
      setResults((prev) => [...prev, ...moreData.data.products]);
    }
  }, [moreData, isSuccess]);

  useEffect(() => {
    document.title = `Search Results for ${queryString}`;
  }, [queryString]);

  async function showMore(query: string, offset: number) {
    moreFn({ query, offset });
  }

  return (
    <Suspense>
      <div className="padding min-h-screen">
        {isFetching && (
          <div className="h-screen flex items-center justify-center">
            <ScaleLoader color={"#024e82"} />
          </div>
        )}
        {isError && (
          <div className="h-screen flex items-center justify-center">
            <p className="text-center text-[1rem] font-semibold text-red-500">
              An error occurred.
            </p>
          </div>
        )}
        {Array.isArray(results) && results.length < 1 && !isFetching && (
          <div className="h-screen flex items-center justify-center">
            <p className="text-center text-[1rem] font-semibold text-red-500">
              No products found.
            </p>
          </div>
        )}
        {Array.isArray(results) && results.length > 0 && !isFetching && (
          <h1 className="my-6 text-center">
            Search results for:{" "}
            <span className="font-semibold text-[1rem] capitalize">
              {queryString}
            </span>{" "}
            <span>{`(${returnedData?.data?.itemCount})`}</span>
          </h1>
        )}
        {Array.isArray(results) && results.length > 0 && !isFetching && (
          <div className="min-h-[60vh]">
            <div className="gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {results.map((item, i) => (
                <ItemCard
                  imageUrl={item.imageUrl}
                  id={item.id}
                  key={i}
                  additionalImageUrls={item.additionalImageUrls[0]}
                  name={item.name}
                  brandName={item.brandName}
                  prevPrice={item.price.previous?.text}
                  price={item.price?.current?.text}
                />
              ))}
            </div>

            {!moreFetching && !moreError && !limitReached && (
              <div
                onClick={() => {
                  showMore(queryString as string, results.length);
                }}
                className="my-8 mx-auto px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer btn-effect"
              >
                SHOW MORE
              </div>
            )}

            {moreFetching && (
              <ScaleLoader
                style={{ textAlign: "center" }}
                color="#024e82"
                className="block mx-auto my-2"
              />
            )}
            {moreError && (
              <p className="text-center text-[0.8rem] text-red-500 pt-3">
                An error occurred. Please refresh the page.
              </p>
            )}
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default Searchpage;
