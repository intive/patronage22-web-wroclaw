import { ExternalPresentation, QuestionType } from "../../types";

export const ExternalPresentationMock: ExternalPresentation = {
  id: "91151a02-8e93-11ec-b909-0242ac120002",
  name: "Sample presentation name",
  description: "Sample description",
  email: "jan.kowalski@gmail.com",
  timer: 10,
  startTime: 1645132670,
  currentTime: 1645132670,
  link: "www.presentation.com",
  status: "active",
  isPublic: true,
  questions: [
    {
      id: "38b451fe-aa14-498e-ad33-4b452a70d21a",
      content: "How many apples?",
      type: QuestionType.Closed,
      answers: ["One", "Four", "Seven", "Ten"],
      answer: ""
    },
    {
      id: "bBkbKxkkak",
      content: "How many dogs?",
      type: QuestionType.Closed,
      answers: ["1", "2", "3"],
      answer: ""
    },
    {
      id: "lkkhaugcugvajvu",
      content: "How many cats?",
      type: QuestionType.Open,
      answer: ""
    }
  ]
};
