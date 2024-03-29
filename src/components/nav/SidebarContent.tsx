import navLinks from "@/utils/navlinks";
import Link from "next/link";
import img1 from "../../assets/images/menu-pic1.png";
import img2 from "../../assets/images/menu-pic2.png";
import img3 from "../../assets/images/menu-pic3.png";
import Image from "next/image";
import { arimo } from "@/utils/fontExports";
function SidebarContent({ toggle }: { toggle: () => void }) {
  const images = [img1, img2, img3];
  return (
    <div className="flex flex-col gap-y-6 pt-[15rem]">
      {navLinks.map(({ link, href }, i) => (
        <Link
          onClick={toggle}
          href={href}
          className={`${arimo.className} font-[700] pl-4 bg-gray-300 flex items-center gap-x-3 justify-between h-[3rem]`}
          key={link}
        >
          <p className="whitespace-nowrap text-[0.7rem]">{link}</p>
          <Image
            width={100}
            height={100}
            alt="photo"
            src={images[i]}
            className="h-[3rem] w-10"
          />
        </Link>
      ))}
    </div>
  );
}

export default SidebarContent;
