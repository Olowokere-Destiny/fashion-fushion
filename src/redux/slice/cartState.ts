"use client";
import { CartCardProps, ItemCardProps } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState: { items: CartCardProps[] } = {
  items: [],
};

const cartState = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartCardProps>) => {
      const {payload} = action;
      state.items.unshift({
        name: payload.name,
        brandName: payload.brandName,
        imageUrl: payload.imageUrl,
        id: payload.id,
        price: payload?.price,
        qty: payload.qty
      });
    },
    removeItemCart: (state, action: PayloadAction<number>) => {
      const filtered = state.items.filter((item) => {
        return item.id !== action.payload;
      })
      state.items = filtered;
    },
    clearItemsCart: (state) => {
      state.items = []
    }
  },
});

export const { addItemCart, removeItemCart, clearItemsCart } = cartState.actions;
export default cartState.reducer;
