import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FeedbackSliceName } from "../types";

export const presentations = createApi({
  reducerPath: FeedbackSliceName.Presentations,
  baseQuery: fetchBaseQuery({ baseUrl: "/some-url/presentations" }),
  endpoints: builder => ({
    getPresentations: builder.query({
      query: () => "/"
    }),
    getPresentation: builder.query({
      query: id => `/${id}`
    }),
    addPresentation: builder.mutation({
      query: presentation => ({ url: "/", method: "POST", body: presentation })
    }),
    changePresentation: builder.mutation({
      query: presentation => ({ url: `/${presentation.id}`, method: "PUT", body: presentation })
    }),
    deletePresentation: builder.mutation({
      query: id => ({ url: `/${id}`, method: "DELETE" })
    })
  })
});

export const presentationsReducer = presentations.reducer;

export const presentationsMiddleware = presentations.middleware;
