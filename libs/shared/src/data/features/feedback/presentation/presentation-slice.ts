import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

import { FeedbackSliceName } from "../types";
import { ADD_PRESENTATION, CHANGE_PRESENTATION, DELETE_PRESENTATION, GET_PRESENTATION, GET_PRESENTATIONS } from "./queries";

export const presentationApi = createApi({
  reducerPath: FeedbackSliceName.PresentationApi,
  baseQuery: graphqlRequestBaseQuery({ url: "/someurl" }),
  endpoints: builder => ({
    getPresentations: builder.query({
      query: ({ email }) => ({
        document: GET_PRESENTATIONS,
        variables: { email }
      })
    }),
    getPresentation: builder.query({
      query: ({ id }) => ({
        document: GET_PRESENTATION,
        variables: { id }
      })
    }),
    addPresentation: builder.mutation({
      query: ({ presentation }) => ({ document: ADD_PRESENTATION, variables: { presentation } })
    }),
    changePresentation: builder.mutation({
      query: ({ presentation }) => ({
        document: CHANGE_PRESENTATION,
        variables: { presentation }
      })
    }),
    deletePresentation: builder.mutation({
      query: ({ id }) => ({
        document: DELETE_PRESENTATION,
        variables: { id }
      })
    })
  })
});

export const presentationApiReducer = presentationApi.reducer;

export const presentationApiMiddleware = presentationApi.middleware;
