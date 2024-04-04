"use client";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { MdClose } from "react-icons/md";
import { AutoComplete } from "@/utils/types";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  toggle: () => void;
}
function SearchOverlay({ open, toggle }: Props) {
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

  const suggestions = results?.data.suggestionGroups[0].suggestions;

  async function autoComplete(body: string) {
    const url = `${process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL}/products/auto-complete?q=${body}`;
    const options = {
      method: "GET",
      url,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
        "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
      },
    };

    return fetch(url, options)
      .then((response) => response.json())
      .then((res) => setResults(res));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.searchTerm.trim().length > 2) {
        autoComplete(search.searchTerm);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [inputTrack]);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } pt-[5.2rem] md:pt-10 w-full absolute bottom-0 h-screen z-50 padding bg-[#eeecec] z-[1200]`}
    >
      <MdClose
        onClick={toggle}
        className="cursor-pointer text-[1.7rem] absolute right-4 top-[3.7rem] md:top-6 md:right-8"
      />
      <SearchBox
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        setInputTrack={setInputTrack}
        searchTrigger={searchTrigger}
        setSearchTrigger={setSearchTrigger}
      />

      <div className="h-5/6 mx-auto md:w-5/6 p-4 overflow-auto no-scrollbar">
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
