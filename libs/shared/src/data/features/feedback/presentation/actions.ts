import { presentationApi } from "./presentation-slice";

export const {
  useGetPresentationsQuery,
  useGetPresentationQuery,
  useAddPresentationMutation,
  useChangePresentationMutation,
  useDeletePresentationMutation
} = presentationApi;
