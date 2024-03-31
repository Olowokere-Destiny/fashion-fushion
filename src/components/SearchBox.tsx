import { Dispatch, SetStateAction } from "react";
import { FiSearch } from "react-icons/fi";
interface Props {
  search: { searchTerm: string };
  setSearch: Dispatch<SetStateAction<{ searchTerm: string }>>;
  handleSubmit: (e: React.FormEvent) => void;
  setInputTrack: Dispatch<SetStateAction<number>>;
}
function SearchBox({ search, setSearch, handleSubmit, setInputTrack }: Props) {

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
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="relative md:w-3/4 mx-auto"
      >
        <input
          type="text"
          name="searchTerm"
          value={search.searchTerm}
          onChange={handleChange}
          className="rounded-[3rem] border border-[#555] pl-4 pr-10 py-2 text-[1rem] font-[600] block outline-none w-full placeholder:font-normal"
          placeholder="Search for items and brands"
        />
        <FiSearch
          onClick={(e) => handleSubmit(e)}
          className="cursor-pointer absolute right-4 top-3"
        />
      </form>
    </div>
  );
}

export default SearchBox;
