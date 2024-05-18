"use client";
import { arimo, titillium } from "@/utils/fontExports";
import { useGetProductQuery } from "@/redux/fetchData/service";
import {
  CartCardProps,
  SimilarDataProps,
  SingleProductData,
} from "@/utils/types";
import { ScaleLoader } from "react-spinners";
import { IoBagOutline } from "react-icons/io5";
import Slide from "@/components/react-slick/Slide";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addItemCart, removeItemCart } from "@/redux/slice/cartState";
import { MdClose } from "react-icons/md";
import ItemCard from "@/components/ItemCard";
import { useEffect, useState } from "react";

interface Props {
  params: {
    product: string;
  };
}

function Product({ params: { product } }: Props) {
  const [quantity, setQuantity] = useState({ value: 1 });
  const [similar, setSimilar] = useState<SimilarDataProps>();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.state.cartState.items);
  const {
    data: dataList,
    isFetching,
    isError,
  } = useGetProductQuery(decodeURIComponent(product));
  const productData: SingleProductData = dataList;
  function returnQty() {
    if (quantity.value < 1 || isNaN(quantity.value)) {
      return 1;
    } else {
      return quantity.value;
    }
  }
  const cartObj: CartCardProps = {
    name: productData?.data?.name,
    brandName: productData?.data?.brandName,
    price: productData?.data?.price[0].productPrice.current.text,
    imageUrl: productData?.data?.images[0].url,
    id: productData?.data?.id,
    qty: returnQty().toString(),
  };
  function addToCart(e: React.MouseEvent) {
    e.stopPropagation();
    dispatch(addItemCart(cartObj));
  }
  function removeFromCart(e: React.MouseEvent, i: number) {
    e.stopPropagation();
    dispatch(removeItemCart(i));
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuantity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderButton = (i: number) => {
    const arr: boolean[] = [];
    cart.forEach((item) => {
      if (item.id === i) {
        arr.push(true);
      }
    });
    cart.forEach((item) => {
      if (item.id !== i) {
        arr.push(false);
      }
    });
    const inCart = arr[0];
    if (inCart) {
      return (
        <div
          onClick={(e) => removeFromCart(e, productData?.data?.id)}
          className="flex items-center gap-x-3 mt-5 mx-auto md:mx-0 px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer"
        >
          <p>REMOVE FROM BAG</p>
          <MdClose className="w-4 h-4" />
        </div>
      );
    }
    if (!inCart) {
      return (
        <div
          onClick={(e) => addToCart(e)}
          className="flex items-center gap-x-3 mt-5 mx-auto md:mx-0 px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer"
        >
          <p>ADD TO BAG</p>
          <IoBagOutline className="w-4 h-4" />
        </div>
      );
    }
  };

  async function getSimilar(id: number) {
    const url = `${process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL}/products/list-similarities?id=${id}`;
    const options = {
      method: "GET",
      url,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
        "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
      },
    };

    return fetch(url, options)
      .then((response) => response.json())
      .then((res) => setSimilar(res));
  }
  useEffect(() => {
    if (productData?.data !== null && productData?.data?.id) {
      getSimilar(productData?.data?.id);
    }
    if (productData?.data?.name) {
      document.title = productData?.data.name;
    }
  }, [productData]);

  return (
    <div className="padding min-h-screen">
      {productData?.data === null && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-center text-[1rem] font-semibold text-blue">
            Product details could not be retrieved. Check for another product.
          </p>
        </div>
      )}
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
      {productData?.data && (
        <>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-10 lg:gap-x-12 py-4">
            <div className="relative">
              {productData?.data?.gender && (
                <div className="absolute z-[700] font-bold rounded-sm px-1 top-2 left-2 text-[0.8rem] text-blue bg-blue-300">
                  {productData?.data?.gender}
                </div>
              )}
              <Slide photos={productData?.data?.images} />
            </div>
            <div>
              <h1
                className={`${titillium.className} font-semibold text-[1.5rem] lg:text-[2rem]`}
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
                className="mt-4 lg:mt-7 text-[1rem] text-[#555]"
                dangerouslySetInnerHTML={{
                  __html: productData?.data?.description?.productDescription,
                }}
              ></p>
              {productData?.data?.variants?.length > 0 && (
                <select className="border-2 mx-auto md:mx-0 block border-[#024e82] p-2 cursor-pointer my-4 focus:outline-none">
                  {productData?.data?.variants?.map((size, i) => (
                    <option value={size.size} key={i}>
                      {size.size}
                    </option>
                  ))}
                </select>
              )}
              <div className="flex space-x-1 items-center justify-center md:block">
                <span>Quantity:</span>
                <button
                  onClick={() =>
                    setQuantity((prev) => ({ ...prev, value: prev.value - 1 }))
                  }
                  className="border border-[#024e82] px-2"
                >
                  -
                </button>
                <input
                  type="text"
                  defaultValue={1}
                  onChange={(e) => handleChange(e)}
                  value={quantity.value}
                  name="value"
                  className="border-2  md:mx-0 inline w-10 text-center border-[#024e82] focus:outline-none"
                />
                <button
                  onClick={() =>
                    setQuantity((prev) => ({ ...prev, value: prev.value + 1 }))
                  }
                  className="border border-[#024e82] px-2"
                >
                  +
                </button>
              </div>
              {renderButton(productData?.data?.id)}
            </div>
          </div>
          <div className="mt-6">
            <p
              className="text-[#555] text-[1rem]"
              dangerouslySetInnerHTML={{
                __html: productData?.data?.description?.brandDescription,
              }}
            ></p>
            {productData?.data?.description?.careInfo !== undefined && (
              <p className="text-[0.8rem] mt-3">
                {`* ${productData?.data?.description?.careInfo}`}
              </p>
            )}

            {similar?.data && similar?.data.length > 0 && (
              <div className="mt-10">
                <h1 className="font-semibold text-[1.5rem] md:text-[1.7rem]">
                  You might also like
                </h1>
                <div className="my-8 gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {similar?.data?.map((item, i) => (
                    <ItemCard
                      url={item.url}
                      id={item.id}
                      key={i}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      brandName={item.brandName}
                      price={item.price?.current.text}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
