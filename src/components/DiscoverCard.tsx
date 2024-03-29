import { nunito } from "@/utils/fontExports";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  text: string;
  price?: string;
}

function DiscoverCard({ image, text, price }: Props) {
  return (
    <div className="my-2 cursor-pointer group">
      <div className="lg:h-[270px] xlg:h-[300px] overflow-hidden">
        <Image
          width={100}
          height={100}
          src={image}
          alt="product image"
          className="w-full h-full object-cover object-top"
          unoptimized
        />
      </div>
      <div className="mt-2">
        <p
          className={`${nunito.className} text-center font-semibold group-hover:text-[#024e82]`}
        >
          {text}
        </p>
        {price && <p className="text-blue text-center">{price}</p>}
      </div>
    </div>
  );
}

export default DiscoverCard;
