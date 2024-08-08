import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const key = process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string;

export const asosService = createApi({
  reducerPath: "asosService",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", key);
      headers.set("Content-Type", "application/json; charset=utf-8");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    autoComplete: builder.query({
      query: (body:string) => `/autoSuggestion?query=${body}`
    }),
    search: builder.query({
      query: (body:string) => `/getProductListBySearchTerm?searchTerm=${body}&limit=50`,
    }),
    showMore: builder.query({
      query: (body: {query:string,offset:number}) => `/getProductListBySearchTerm?searchTerm=${body.query}&limit=50&offset=${body.offset}`,
    }),
    getProduct: builder.query({
      query: (id:number) => `/getProductDetails?productId=${id}`,
    }),
  }),
});

export const { useLazyAutoCompleteQuery, useSearchQuery, useLazyShowMoreQuery, useGetProductQuery } = asosService;