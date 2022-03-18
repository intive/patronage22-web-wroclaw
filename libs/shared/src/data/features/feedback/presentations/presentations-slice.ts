import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FeedbackSliceName } from "../types";

export const presentations = createApi({
  reducerPath: FeedbackSliceName.Presentations,
  baseQuery: fetchBaseQuery({ baseUrl: "/some-url" }),
  endpoints: builder => ({
    getPresentations: builder.query({
      query: () => "/presentations"
    }),
    getPresentation: builder.query({
      query: id => `/presentations/${id}`
    }),
    addPresentation: builder.mutation({
      query: () => "/presentations"
    }),
    changePresentation: builder.mutation({
      query: id => `/presentations/${id}`
    }),
    deletePresentation: builder.mutation({
      query: id => `/presentations/${id}`
    })
  })
});

export const presentationsReducer = presentations.reducer;

export const presentationsMiddleware = presentations.middleware;
