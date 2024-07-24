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
  const [queryString, setQueryString] = useState<string | null>();
  const [totalPages, setTotalPages] = useState(0);
  const [totalResCount, setTotalResCount] = useState(0);
  const searchParams = useSearchParams().get("q");
  useEffect(() => {
    setQueryString(searchParams);
  }, [searchParams]);

  const [results, setResults] = useState<ItemProps[]>([]);
  const { data, isFetching, isError } = useSearchQuery(queryString as string);
  const [moreFn, { data: moreData, isFetching: moreFetching, isSuccess, isError: moreError }] =
    useLazyShowMoreQuery();
  const [page, setPage] = useState(1);
  const returnedData: ItemCardData = data;

  useEffect(() => {
    setResults(returnedData?.data.products);
    setTotalPages(returnedData?.totalPages);
    setTotalResCount(returnedData?.totalResultCount);
  }, [returnedData?.data.products]);

  useEffect(() => {
    document.title = `Search Results for  ${queryString}`;
  }, [results]);

  useEffect(()=>{
    if (isSuccess) {
      setResults((prev) => {
        return [...prev, ...moreData?.data?.products];
      });
      setTotalPages(moreData?.totalPages);
      setTotalResCount(moreData?.totalResultCount);
    }
  }, [moreData?.data])

  async function showMore(query: string, page: number) {
    moreFn({ query, page });
  }

  useEffect(() => {
    if (page > 1) {
      showMore(queryString as string, page);
    }
  }, [page]);

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
              An error occured.
            </p>
          </div>
        )}
        {Array.isArray(results) && results.length < 1 && (
          <div className="h-screen flex items-center justify-center">
            <p className="text-center text-[1rem] font-semibold text-red-500">
              No products found.
            </p>
          </div>
        )}
        {Array.isArray(results) && results.length > 0 && (
          <h1 className="my-6 text-center ">
            Search results for:{" "}
            <span className="font-semibold text-[1rem] capitalize">
              {queryString}
            </span>{" "}
            <span>{`(${totalResCount})`}</span>
          </h1>
        )}
        {Array.isArray(results) && results.length > 0 && (
          <div className="min-h-[60vh]">
            <div className="gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {results.map((item, i) => (
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
            </div>

            {!moreFetching && !moreError && (
              <div
                onClick={() => {
                  setPage((prev) => prev + 1);
                }}
                className={`${
                  page === totalPages ? "hidden" : "block"
                } my-8 mx-auto px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer btn-effect`}
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
            {
              moreError && <p className="text-center text-[0.8rem] text-red-500 pt-3">An error occured. Please refresh the page.</p>
            }
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default Searchpage;
