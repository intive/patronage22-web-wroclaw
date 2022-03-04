import { ParticipationForm, ParticipationQuestionType } from "../types";

export const ParticipationFormMock: ParticipationForm = {
  id: "91151a02-8e93-11ec-b909-0242ac120002",
  questions: [
    {
      id: "0",
      number: 1,
      title: "How many apples?",
      type: ParticipationQuestionType.Closed,
      answers: ["Test 1", " Test 2", "Test 3"],
      defaultAnswer: "Test 1",
      created: 1645132670,
      current: 1645132675,
      maxAnswerTime: 15
    },
    {
      id: "1",
      number: 2,
      title: "How many doggos?",
      type: ParticipationQuestionType.Closed,
      answers: ["11", "24", "37"],
      created: 1645132670,
      current: 1645132671,
      maxAnswerTime: 60
    },
    {
      id: "2",
      number: 3,
      title: "How many doggos?",
      type: ParticipationQuestionType.Open,
      created: 1645132670,
      current: 1645132671,
      maxAnswerTime: 60
    }
  ]
};
