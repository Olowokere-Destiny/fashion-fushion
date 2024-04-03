import { FaAngleRight } from "react-icons/fa6";

interface SlideBtnProp {
  onClick?: () => void;
}
const NextArrow = ({ onClick }: SlideBtnProp) => {
  return (
    <FaAngleRight
      onClick={onClick}
      className="absolute right-0 top-[46%] lg:top-[50%] z-[500] text-[1.5rem] cursor-pointer border-[#024e82] border-[1.5px] p-1"
    />
  );
};
export default NextArrow;
