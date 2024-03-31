"use client";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  product: "",
};

const globalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = globalState.actions;
export default globalState.reducer;
