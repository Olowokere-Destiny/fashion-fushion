"use client";
import CartItemCard from "@/components/CartItemCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearItemsCart } from "@/redux/slice/cartState";
import { AiOutlineDelete } from "react-icons/ai";

function BagPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.state.cartState.items);
  return (
    <div className="min-h-screen padding py-8">
      {cart?.length < 1 && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-center text-[1rem] font-semibold text-blue">
            Bag is empty.
          </p>
        </div>
      )}
      {Array.isArray(cart) && cart.length > 0 && (
        <div className="min-h-screen ">
          <div className="gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cart.map((item, i) => (
              <CartItemCard
                imageUrl={item.imageUrl}
                id={item.id}
                key={i}
                name={item.name}
                brandName={item.brandName}
                price={item.price}
                qty={item.qty}
              />
            ))}
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div
          onClick={() => dispatch(clearItemsCart())}
          className="mt-4 mx-auto p-4 md:p-5 rounded-full text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer"
        >
          <AiOutlineDelete className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      )}
    </div>
  );
}

export default BagPage;
