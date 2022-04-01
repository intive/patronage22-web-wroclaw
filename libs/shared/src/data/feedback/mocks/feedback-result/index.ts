import { FeedbackQuestionAnswers, ParticipationQuestionType } from "../../types";

export const LiveResultsAnswers: FeedbackQuestionAnswers = {
  id: "38b451fe-aa14-498e-ad33-4b452a70d21a",
  title: "How many apples?",
  type: ParticipationQuestionType.Closed,
  created: 1645132670,
  current: 1645132675,
  answers: [
    { title: "One", count: 5, answer: 1 },
    { title: "Four", count: 3, answer: 2 },
    { title: "Seven", count: 2, answer: 3 },
    { title: "Ten", count: 1, answer: 4 }
  ]
};