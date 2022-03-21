import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FeedbackSliceName, Presentation } from "../types";

export const presentations = createApi({
  reducerPath: FeedbackSliceName.Presentations,
  // TODO: replace baseUrl with valid url to backend
  baseQuery: fetchBaseQuery({ baseUrl: "/some-url/presentations" }),
  endpoints: builder => ({
    getPresentations: builder.query<Presentation[], void>({
      query: () => "/"
    }),
    getPresentation: builder.query<Presentation, Presentation["id"]>({
      query: id => `/${id}`
    }),
    addPresentation: builder.mutation<void, Presentation>({
      query: presentation => ({ url: "/", method: "POST", body: presentation })
    }),
    changePresentation: builder.mutation<void, Presentation>({
      query: presentation => ({ url: `/${presentation.id}`, method: "PUT", body: presentation })
    }),
    deletePresentation: builder.mutation<void, Presentation["id"]>({
      query: id => ({ url: `/${id}`, method: "DELETE" })
    })
  })
});

export const presentationsReducer = presentations.reducer;

export const presentationsMiddleware = presentations.middleware;
