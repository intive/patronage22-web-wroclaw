import { ExternalPresentation, QuestionType } from "../../types";

export const ExternalPresentationMock: ExternalPresentation = {
  id: "91151a02-8e93-11ec-b909-0242ac120002",
  name: "Sample presentation name",
  description: "Sample description",
  email: "jan.kowalski@gmail.com",
  timer: 60,
  startTime: 1645132670,
  currentTime: 1645132675,
  link: "www.presentation.com",
  status: "active",
  isPublic: true,
  questions: [
    {
      id: "cjksjlclsjclk",
      number: 1,
      title: "How many apples?",
      type: QuestionType.Closed,
      answers: ["Test 1", " Test 2", "Test 3"]
    },
    {
      id: "bBkbKxkkak",
      number: 2,
      title: "How many doggos?",
      type: QuestionType.Closed,
      answers: ["11", "24", "37"]
    },
    {
      id: "lkkhaugcugvajvu",
      number: 3,
      title: "How many doggos?",
      type: QuestionType.Open
    }
  ]
};
