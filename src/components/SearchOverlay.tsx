"use client";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { MdClose } from "react-icons/md";
import { AutoComplete } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useLazyAutoCompleteQuery } from "@/redux/fetchData/service";

interface Props {
  open: boolean;
  toggle: () => void;
}
function SearchOverlay({ open, toggle }: Props) {
  const [autoComp, { data, isFetching, isError }] = useLazyAutoCompleteQuery();
  const [search, setSearch] = useState({ searchTerm: "" });
  const [results, setResults] = useState<AutoComplete>();
  const [inputTrack, setInputTrack] = useState(0);
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [url, setUrl] = useState<URL | undefined>();
  const router = useRouter();
  useEffect(() => {
    const url = new URL(`${window?.location.href}`);
    setUrl(url);
  }, []);

  function toSearch(query: string) {
    url?.searchParams.set("q", query);
    router.push(url?.origin + "/search" + url?.search);
  }

  const handleSubmit = (e?: React.FormEvent, listItem?: string) => {
    e?.preventDefault();
    toggle();
    if (listItem) {
      toSearch(listItem);
    } else {
      toSearch(search.searchTerm);
    }
  };

  useEffect(() => {
    setResults(data);
  }, [data]);

  async function autoComplete(body: string) {
    autoComp(body);
  }
  const suggestions = results?.data.suggestionGroups[0].suggestions;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.searchTerm.trim().length > 2) {
        autoComplete(search.searchTerm);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [inputTrack]);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } pt-[3rem] md:pt-[4rem] w-full absolute top-0 right-0 left-0 bottom-0 h-[100dvh] padding bg-[#eeecec] z-[1200]`}
    >
      <div
        onClick={toggle}
        className="md:hover:bg-[#cacaca] md:p-1 md:rounded-lg md:flex md:items-center md:gap-x-1 cursor-pointer text-[1.7rem] md:text-[1.5rem] absolute right-4 top-5 md:top-6 md:right-8 md:px-2"
      >
        <MdClose />
        <p className="hidden md:block font-semibold text-[0.8rem]">Close</p>
      </div>

      <SearchBox
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        setInputTrack={setInputTrack}
        searchTrigger={searchTrigger}
        setSearchTrigger={setSearchTrigger}
      />

      {search.searchTerm.trim().length > 0 && (
        <div
          className="bg-[#fafafa] mx-auto rounded-md py-4 px-6 text-center md:w-5/6 mb-3 cursor-pointer hover:scale-[102%] transition-all"
          onClick={() => handleSubmit(undefined, search.searchTerm)}
        >
          Search for{" "}
          <span className="font-bold">"{search.searchTerm.trim()}"</span>
        </div>
      )}

      {isFetching && <p className="pt-1 text-[0.9rem] text-blue text-center">Getting items...</p>}
      {isError && <p className="pt-1 text-[0.9rem] text-red-500 text-center">An error occured.</p>}

      <div className="mx-auto md:w-5/6 p-4 overflow-auto no-scrollbar">
        {Array.isArray(suggestions) &&
          suggestions.map((suggestion, i) => (
            <div
              onClick={() => {
                setSearch({ searchTerm: suggestion.searchTerm });
                handleSubmit(undefined, suggestion.searchTerm);
              }}
              key={i}
              className="capitalize flex my-3 justify-between py-2 px-4 text-[1rem] hover:bg-gray-100 cursor-pointer rounded-md"
            >
              <p>{suggestion.searchTerm}</p>
              <p>{suggestion.numberOfResults}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchOverlay;
