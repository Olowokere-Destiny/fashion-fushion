"use client";
import autoComplete from "@/utils/autocomplete";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchBox() {
  const [search, setSearch] = useState({ searchTerm: "" });
  const [inputTrack, setInputTrack] = useState(0);
  const getItems = () => {
    autoComplete(search.searchTerm).then((res) => console.log(res));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      //   getItems();
      if (search.searchTerm.trim().length > 2) {
        console.log(search.searchTerm);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [inputTrack]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputTrack((prev) => prev + 1);
    const { name, value } = e.target;
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="my-3 padding">
      <div className="relative md:w-3/4 mx-auto">
        <input
          type="text"
          name="searchTerm"
          value={search.searchTerm}
          onChange={handleChange}
          className="rounded-[3rem] border border-[#555] pl-4 pr-10 py-2 text-[1rem] font-[600] block outline-none w-full placeholder:font-normal"
          placeholder="Search for items and brands"
        />
        <FiSearch className="cursor-pointer absolute right-4 top-3" />
      </div>
    </div>
  );
}

export default SearchBox;
