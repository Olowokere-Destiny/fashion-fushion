"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchBox() {
  const [search, setSearch] = useState();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
  };
  return (
    <div className="my-3 padding">
      <div className="relative md:w-3/4 mx-auto">
        <input
          type="text"
          className="rounded-[3rem] border border-[#555] pl-4 pr-10 py-2 text-[1rem] font-[600] block outline-none w-full placeholder:font-normal"
          placeholder="Search for items and brands"
        />
        <FiSearch className="absolute right-4 top-3" />
      </div>
    </div>
  );
}

export default SearchBox;
