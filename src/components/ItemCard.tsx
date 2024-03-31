"use client";
import Image from "next/image";
import { useRef } from "react";
import { titillium } from "@/utils/fontExports";
import { ItemCardProps } from "@/utils/types";
import { IoIosHeartEmpty } from "react-icons/io";

function ItemCard({
  name,
  brandName,
  price,
  imageUrl,
  additionalImageUrls,
}: ItemCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  function flickImage() {
    if (additionalImageUrls) {
      imageRef.current!.src = "https://" + additionalImageUrls;
    }
  }
  function flickImgPrev() {
    imageRef.current!.src = "https://" + imageUrl;
  }
  return (
    <div className="cursor-pointer">
      <div className="h-[200px] xlg:h-[300px] relative">
        <Image
          src={"https://" + imageUrl}
          onMouseOver={flickImage}
          onMouseOut={flickImgPrev}
          width={100}
          ref={imageRef}
          height={100}
          alt="Product image"
          className="w-full h-full object-cover object-top"
          unoptimized
        />
      <div className="absolute right-4 bottom-2 bg-white p-1 hover:shadow-md rounded-full">
        <IoIosHeartEmpty
          className="cursor-pointer w-5 h-5"
          title="Add to Favourites"
        />
      </div>
      </div>
      <div className="mt-2 space-y-1">
        <div
          title={name}
          className="text-[0.8rem] tracking-[0.015em] custom-ellipsis"
        >
          {name}
        </div>
        <p className="uppercase text-[0.7rem] font-[400]">{brandName}</p>
      </div>
      <p className={`${titillium.className} font-bold mt-2 text-blue`}>{price}</p>
    </div>
  );
}

export default ItemCard;
