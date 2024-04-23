import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6623b27c3e17a3ac846fe8ef.mockapi.io/' }),
  tagTypes: ['Products', 'Cart'],
  endpoints: (build) => ({
    /* QUERY */
    /* Products */
    getProducts: build.query<IShopApiDataItem[], {sortBy: 'title' | 'price', order: 'asc' | 'desc', title: string}>({
      query: ({sortBy, order, title = ''}) => ({
        url: `products`,
        params: {
          sortBy: sortBy,
          order: order,
          title: title,
        }
      }),
      providesTags: (result): any =>
        result
          ? [
              { type: 'Products', id: 'LIST' },
              ...result.map(({ id }) => ({ type: 'Products', id })),
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    /* Cart */
    getCart: build.query<IShopApiCartItem[], void>({
      query: () => `cart`,
      providesTags: (result): any =>
        result
          ? [
              { type: 'Cart', id: 'LIST' },
              ...result.map(({ id }) => ({ type: 'Cart', id })),
            ]
          : [{ type: 'Cart', id: 'LIST' }],
    }),

    /* MUTATIONS */
    addToCart: build.mutation<IShopApiDataItem, { product: IShopApiDataItem }>({
      query: ({product}) => ({
        url: `cart`,
        method: 'POST',
        body: {
          ...product,
        },
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    changeCount: build.mutation<IShopApiDataItem, { id: string, count: number}>({
      query: ({id, count}) => ({
        url: `cart/${id}`,
        method: 'PUT',
        /* тут stringify, т.к. число передаём обычное, а выше сразу json полученный с сервака */
        body: JSON.stringify({count: count}),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),

    deleteFromCart: build.mutation<void, { id: string }>({
      query: ({id}) => ({
        url: `cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
  }),
});

export const { useGetProductsQuery, useGetCartQuery, useAddToCartMutation, useDeleteFromCartMutation, useChangeCountMutation } = shopApi;
