import { FeedbackQuestionAnswers, QuestionType } from "../../types";

export const LiveResultsAnswers: FeedbackQuestionAnswers[] = [
  {
    id: "38b451fe-aa14-498e-ad33-4b452a70d21a",
    title: "How many apples?",
    type: QuestionType.Closed,
    created: 1645132675,
    current: 1645132675,
    answers: [
      { title: "One", count: 5, answer: 1 },
      { title: "Four", count: 3, answer: 2 },
      { title: "Seven", count: 2, answer: 3 },
      { title: "Ten", count: 1, answer: 4 }
    ]
  },
  {
    id: "38b451fe-aa14-498e-ad33-4b452a70d21b",
    title: "How many dogs?",
    type: QuestionType.Closed,
    created: 1645132683,
    current: 1645132683,
    answers: [
      { title: "1", count: 3, answer: 1 },
      { title: "2", count: 5, answer: 2 },
      { title: "3", count: 2, answer: 3 }
    ]
  },
  {
    id: "38b451fe-aa14-498e-ad33-4b452a70d21v",
    title: "How many cats?",
    type: QuestionType.Open,
    created: 1645132694,
    current: 1645132694,
    answers: [
      { title: "15", count: 7, answer: 1 },
      { title: "2", count: 5, answer: 2 },
      { title: "others", count: 2, answer: 3 }
    ]
  }
];
