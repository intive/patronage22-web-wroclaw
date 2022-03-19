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
      query: presentation => ({ url: "/presentations", method: "POST", body: presentation })
    }),
    changePresentation: builder.mutation({
      query: presentation => ({ url: `/presentations/${presentation.id}`, method: "PUT", body: presentation })
    }),
    deletePresentation: builder.mutation({
      query: id => ({ url: `/presentations/${id}`, method: "DELETE" })
    })
  })
});

export const presentationsReducer = presentations.reducer;

export const presentationsMiddleware = presentations.middleware;
