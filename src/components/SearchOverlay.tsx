import SearchBox from "./SearchBox";
import { MdClose } from "react-icons/md";
interface Props {
  open: boolean;
  toggle: () => void;
}
function SearchOverlay({ open, toggle }: Props) {

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } pt-[5.2rem] md:pt-10 w-full absolute bottom-0 h-screen z-50 padding bg-[#eeecec]`}
    >
      <MdClose
        onClick={toggle}
        className="cursor-pointer text-[1.5rem] absolute right-4 top-[3.7rem] md:top-6 md:right-8"
      />
      <SearchBox />
    </div>
  );
}

export default SearchOverlay;
