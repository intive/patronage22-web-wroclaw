import { ExternalUserPresentationSummary, ExtPresentationSummaryProps } from "@patronage-web/features-feedback";
import { Question } from "@patronage-web/shared-data";
import { ComponentMeta } from "@storybook/react";

export const ExternalUserPresentationSummaryStory: React.FC<ExtPresentationSummaryProps> = ({ questions }) => {
  return <ExternalUserPresentationSummary questions={questions} />;
};

const questions: Question[] = [
  {
    id: "1",
    content: "Best fruit:",
    answers: [
      { answer: 1, content: "Apple", count: 10 },
      { answer: 2, content: "Pineapple", count: 5 },
      { answer: 3, content: "Orange", count: 13 },
      { answer: 4, content: "Plum", count: 15 }
    ]
  },
  {
    id: "2",
    content: "Best vegetable:",
    answers: [
      { answer: 1, content: "Carrot", count: 10 },
      { answer: 2, content: "Salad", count: 5 },
      { answer: 3, content: "Tomato", count: 13 },
      { answer: 4, content: "Corn", count: 15 },
      { answer: 5, content: "Cucumber", count: 17 }
    ]
  },
  {
    id: "3",
    content: "Best SW movie:",
    answers: [
      { answer: 1, content: "The New Hope", count: 10 },
      { answer: 2, content: "Empire Strikes Back", count: 13 },
      { answer: 3, content: "Revenge of the Siths", count: 25 },
      { answer: 4, content: "Phantom Menace", count: 5 },
      { answer: 5, content: "The Last Jedi", count: 3 }
    ]
  },
  {
    id: "4",
    content: "Best city to live:",
    answers: [
      { answer: 1, content: "Wroclaw", count: 10 },
      { answer: 2, content: "London", count: 5 },
      { answer: 3, content: "Berlin", count: 13 },
      { answer: 4, content: "Rio De Janeiro", count: 15 },
      { answer: 5, content: "Miami", count: 17 }
    ]
  }
];

export default {
  title: "Presentation summary for external user",
  component: ExternalUserPresentationSummaryStory,
  args: { questions }
} as ComponentMeta<typeof ExternalUserPresentationSummaryStory>;
