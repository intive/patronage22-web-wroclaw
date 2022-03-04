import { FeedbackResults } from "../types/external-feedback";

export const FeedbackResultsMock: FeedbackResults = {
  questionResults: [
    {
      totalCount: 10,
      answers: [
        {
          questionId: 0,
          title: "How many apples?",
          count: 7
        },
        {
          questionId: 1,
          title: "How many doggos?",
          count: 3
        }
      ]
    }
  ]
};
