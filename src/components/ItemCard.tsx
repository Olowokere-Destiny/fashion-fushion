"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { titillium } from "@/utils/fontExports";
import { ItemCardProps } from "@/utils/types";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useRouter } from "next/navigation";
import { addItem, removeItem } from "@/redux/slice/bagState";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function ItemCard({
  name,
  brandName,
  price,
  imageUrl,
  additionalImageUrls,
  prevPrice,
  id,
}: ItemCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const router = useRouter();
  function flickImage() {
    if (additionalImageUrls) {
      imageRef.current!.src = "https://" + additionalImageUrls;
    }
  }
  function flickImgPrev() {
    imageRef.current!.src = "https://" + imageUrl;
  }

  const dispatch = useAppDispatch();
  const bag = useAppSelector((state) => state.state.bagState.items);
  const bagObj: ItemCardProps = {
    name,
    brandName,
    price,
    imageUrl,
    id,
  };
  function addToFav(e: React.MouseEvent, i: number) {
    e.stopPropagation();
    dispatch(addItem(bagObj));
  }
  function removeFromFav(e: React.MouseEvent, i: number) {
    e.stopPropagation();
    dispatch(removeItem(i));
  }

  const renderIcon = (i: number) => {
    const arr: boolean[] = [];
    bag.forEach((item) => {
      if (item.id === i) {
        arr.push(true);
      }
    });
    bag.forEach((item) => {
      if (item.id !== i) {
        arr.push(false);
      }
    });
    const inBag = arr[0];
    if (inBag) {
      return (
        <div
          onClick={(e) => removeFromFav(e, id)}
          className="absolute right-4 bottom-2 bg-white p-1 hover:shadow-md rounded-full"
        >
          <IoIosHeart
            className="cursor-pointer w-5 h-5"
            title="Remove from Favourites"
          />
        </div>
      );
    }
    if (!inBag) {
      return (
        <div
          onClick={(e) => addToFav(e, id)}
          className="absolute right-4 bottom-2 bg-white p-1 hover:shadow-md rounded-full"
        >
          <IoIosHeartEmpty
            className="cursor-pointer w-5 h-5"
            title="Add to Favourites"
          />
        </div>
      );
    }
  };

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/search/${id}`)}
    >
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
        {renderIcon(id)}
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
      <div className="flex items-center gap-x-2">
        <p className={`${titillium.className} font-bold mt-2 text-blue`}>
          {price}
        </p>
        {prevPrice && (
          <p
            className={`${titillium.className} font-[600] mt-2 text-gray-500 line-through`}
          >
            {prevPrice}
          </p>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
