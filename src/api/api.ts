import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3000" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/data",
      providesTags: ["Todo"],
    }),
    getTodosById: builder.query({
      query: (id) => `/data?id=${id}`,
      providesTags: ["Todo"],
    }),
    postTodos: builder.mutation({
      query: (body) => ({
        url: "/todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    putTodos: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/data/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    delTodos: builder.mutation({
      query: (id) => ({
        url: `/data/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});
export const {
  useGetTodosQuery,
  useDelTodosMutation,
  usePostTodosMutation,
  usePutTodosMutation,
  useGetTodosByIdQuery
} = todosApi;
