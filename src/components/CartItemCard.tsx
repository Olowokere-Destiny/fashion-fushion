"use client";
import Image from "next/image";
import { titillium } from "@/utils/fontExports";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MdClose } from "react-icons/md";
import { removeItemCart } from "@/redux/slice/cartState";
import { CartCardProps } from "@/utils/types";

function CartItemCard({ name, brandName, price, imageUrl, id, qty }: CartCardProps) {
  const dispatch = useAppDispatch();
  function removeItem(e: React.MouseEvent, i: number) {
    e.stopPropagation();
    dispatch(removeItemCart(i));
  }

  return (
    <div>
      <div className="h-[200px] xlg:h-[300px] relative">
        <div className="rounded-full h-6 w-6 text-[0.7rem] flex items-center justify-center bg-blue text-white absolute top-2 left-2">{qty}</div>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="Product image"
          className="w-full h-full object-cover object-top"
          unoptimized
        />
        <div
          onClick={(e) => removeItem(e, id)}
          className="absolute right-4 top-2 bg-white p-1 hover:shadow-md rounded-full"
        >
          <MdClose
            className="cursor-pointer w-5 h-5"
            title="Remove from Cart"
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
      <div className="flex items-center gap-x-2">
        <p className={`${titillium.className} font-bold mt-2 text-blue`}>
          {price}
        </p>
      </div>
    </div>
  );
}

export default CartItemCard;
