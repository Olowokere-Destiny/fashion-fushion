"use client";
import Image from "next/image";
import { arimo, titillium } from "@/utils/fontExports";
import { useGetProductQuery } from "@/redux/fetchData/service";
import { SingleProductData } from "@/utils/types";
import { ScaleLoader } from "react-spinners";
import { IoBagOutline } from "react-icons/io5";

interface Props {
  params: {
    product: string;
  };
}

function Product({ params: { product } }: Props) {
  // const encodedUrl = encodeURIComponent(product)
  const { data: dataList, isFetching, isError } = useGetProductQuery(product);
  const productData: SingleProductData = dataList;
  return (
    <div className="padding">
      {isFetching && (
        <div className="h-screen flex items-center justify-center">
          <ScaleLoader color={"#024e82"} />
        </div>
      )}
      {isError && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-center text-[1rem] font-semibold text-red-500">
            An error occured.
          </p>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-4 lg:gap-x-12 py-4">
        <div className="w-full md:max-h-[350px] lg:max-w-[400px] md:w-[35vw] lg:w-[25vw] shrink-0 relative">
          <div className="absolute font-bold rounded-sm px-1 top-2 left-2 text-[0.8rem] text-blue bg-blue-300">
            Men
          </div>
          <Image
            src={productData?.data?.images[0]?.url}
            alt={productData?.data?.images[0]?.alternateText}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1
            className={`${titillium.className} font-semibold text-[1.8rem] lg:text-[2rem]`}
          >
            {productData?.data?.name}
          </h1>
          <p className={`${arimo.className} uppercase text-[0.9rem] my-1`}>
            {productData?.data?.brandName}
          </p>
          <div className="flex gap-x-3 items-center font-semibold text-[1.2rem]">
            <p className="line-through text-gray-300">
              {productData?.data?.price[0].productPrice?.previous?.text}
            </p>
            <p className="text-blue">
              {productData?.data?.price[0].productPrice?.current?.text}
            </p>
          </div>
          <p
            className="mt-4 lg:mt-7 text-[1.2rem] lg:text-[1rem] text-[#555]"
            dangerouslySetInnerHTML={{
              __html: productData?.data?.description?.productDescription,
            }}
          ></p>
          {/* <div className="border border-black p-4 w-max mt-4 lg:mt-8">
            Select size
          </div> */}
          <select className="border-2 border-[#024e82] p-2 cursor-pointer my-2 focus:outline-none">
            {productData?.data?.variants?.map((size, i) => (
              <option value={size.size} key={i}>
                {size.size}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-x-3 mt-5 mx-auto md:mx-0 px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer">
            <p>ADD TO CART</p>
            <IoBagOutline className="w-4 h-4" title="Bag" />
          </div>
        </div>
      </div>
      <div className="mt-6 p-4">
        <p
          className="text-[#555] text-[1.2rem] lg:text-[1.1rem]"
          dangerouslySetInnerHTML={{
            __html: productData?.data?.description?.brandDescription,
          }}
        >
          {/* {productData?.data?.description?.brandDescription} */}
        </p>
        <p className="text-[1.1rem] lg:text-[0.9rem] mt-3">
          {productData?.data?.description?.careInfo}
        </p>
      </div>
    </div>
  );
}

export default Product;
