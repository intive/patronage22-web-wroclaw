import { presentations } from "./presentations-slice";

export const {
  useGetPresentationsQuery,
  useGetPresentationQuery,
  useAddPresentationMutation,
  useChangePresentationMutation,
  useDeletePresentationMutation
} = presentations;
