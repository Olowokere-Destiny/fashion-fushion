"use client";
import { ItemCardProps } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState: { items: ItemCardProps[] } = {
  items: [],
};

const bagState = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemCardProps>) => {
      const {payload} = action;
      state.items.unshift({
        name: payload.name,
        brandName: payload.brandName,
        imageUrl: payload.imageUrl,
        id: payload.id,
        url: payload.url,
        price: payload?.price
      });
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const filtered = state.items.filter((item) => {
        return item.id !== action.payload;
      })
      state.items = filtered;
    },
    clearItems: (state) => {
      state.items = []
    }
  },
});

export const { addItem, removeItem, clearItems } = bagState.actions;
export default bagState.reducer;
