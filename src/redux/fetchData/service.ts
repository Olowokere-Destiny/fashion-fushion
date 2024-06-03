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
    autoComplete: builder.query({
      query: (body:string) => `/products/auto-complete?q=${body}`,
    }),
    search: builder.query({
      query: (body:string) => `/products/search?q=${body}`,
    }),
    showMore: builder.query({
      query: (body: {query:string,page:number}) => `/products/search?q=${body.query}&page=${body.page}`,
    }),
    getProduct: builder.query({
      query: (url:string) => ({
        url: "/products/detail",
        params: {
          url
        }
      }),
    })
  }),
});

export const { useLazyAutoCompleteQuery, useSearchQuery, useLazyShowMoreQuery, useGetProductQuery } = asosService;