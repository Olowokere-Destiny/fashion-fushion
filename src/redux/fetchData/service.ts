import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const key = process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string;

export const asosService = createApi({
  reducerPath: "asosService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", key);
      headers.set("Content-Type", "application/json; charset=utf-8");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    search: builder.query({
      query: (body:string) => `/products/search?q=${body}`,
    }),
    getProduct: builder.query({
      query: (body:string) => `/products/detail?url=${body}`,
    }),
  }),
});

export const { useSearchQuery, useGetProductQuery } = asosService;