"use client";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  items: 0,
};

const bagState = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      state.items = action.payload;
    },
  },
});

export const { addItem } = bagState.actions;
export default bagState.reducer;
