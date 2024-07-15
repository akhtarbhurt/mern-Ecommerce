import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({

  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '',
    }),
  }),
  
});

export const { useGetPostsQuery } = api;
