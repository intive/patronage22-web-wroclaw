import { PresentationLiveSummary, PresentationLiveSummaryProps } from "@patronage-web/features-feedback";
import { Question } from "@patronage-web/shared-data";
import { ComponentMeta } from "@storybook/react";

export const PresentationLiveSummaryStory: React.FC<PresentationLiveSummaryProps> = ({ questions }) => {
  return <PresentationLiveSummary questions={questions} />;
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
      { answer: 1, content: "Episode I", count: 10 },
      { answer: 2, content: "Episode II", count: 13 },
      { answer: 3, content: "Episode III", count: 25 },
      { answer: 4, content: "Episode IV", count: 5 },
      { answer: 5, content: "Episode V", count: 3 },
      { answer: 6, content: "Episode VI", count: 3 }
    ]
  },
  {
    id: "4",
    content: "Best city to live:",
    answers: [
      { answer: 1, content: "Wroclaw", count: 10 },
      { answer: 2, content: "London", count: 5 },
      { answer: 3, content: "Berlin", count: 13 },
      { answer: 4, content: "Las Palmas", count: 15 },
      { answer: 5, content: "Miami", count: 17 }
    ]
  }
];

export default {
  title: "Presentation summary for external user",
  component: PresentationLiveSummaryStory,
  args: { questions }
} as ComponentMeta<typeof PresentationLiveSummaryStory>;
