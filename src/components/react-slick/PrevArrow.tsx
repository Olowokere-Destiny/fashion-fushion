import { FaAngleLeft } from "react-icons/fa6";

interface SlideBtnProp {
  onClick?: () => void;
}
const PrevArrow = ({ onClick }: SlideBtnProp) => {
  return (
    <FaAngleLeft
      onClick={onClick}
      className="absolute left-0 top-[46%] lg:top-[50%] z-[500] text-[1.5rem] cursor-pointer border-[#024e82] border-[1.5px] p-1"
    />
  );
};
export default PrevArrow;
