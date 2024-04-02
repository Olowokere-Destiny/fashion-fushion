"use client";
import { nunito } from "@/utils/fontExports";
0;
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  image: StaticImageData;
  text: string;
  price?: string;
}

function DiscoverCard({ image, text, price }: Props) {
  return (
    <Link
      href={`/search?q=${text.replace(" ", "+")}`}
      className="my-2 cursor-pointer group"
      onClick={() => {}}
    >
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
    </Link>
  );
}

export default DiscoverCard;
