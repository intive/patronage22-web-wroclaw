import { PresentationLiveSummary, PresentationLiveSummaryProps } from "@patronage-web/features-feedback";
import { FeedbackQuestionAnswers, QuestionType } from "@patronage-web/shared-data";
import { ComponentMeta } from "@storybook/react";

export const PresentationLiveSummaryStory: React.FC<PresentationLiveSummaryProps> = ({ questions }) => {
  return <PresentationLiveSummary questions={questions} />;
};

const questions: FeedbackQuestionAnswers[] = [
  {
    id: "1",
    title: "Best fruit:",
    type: QuestionType.Closed,
    created: 1645132675,
    current: 1645132675,
    answers: [
      { answer: 1, title: "Apple", count: 10 },
      { answer: 2, title: "Pineapple", count: 5 },
      { answer: 3, title: "Orange", count: 13 },
      { answer: 4, title: "Plum", count: 15 }
    ]
  },
  {
    id: "2",
    title: "Best vegetable:",
    type: QuestionType.Closed,
    created: 1645132675,
    current: 1645132675,
    answers: [
      { answer: 1, title: "Carrot", count: 10 },
      { answer: 2, title: "Salad", count: 5 },
      { answer: 3, title: "Tomato", count: 13 },
      { answer: 4, title: "Corn", count: 15 },
      { answer: 5, title: "Cucumber", count: 17 }
    ]
  },
  {
    id: "3",
    title: "Best SW movie:",
    type: QuestionType.Closed,
    created: 1645132675,
    current: 1645132675,
    answers: [
      { answer: 1, title: "Episode I", count: 10 },
      { answer: 2, title: "Episode II", count: 13 },
      { answer: 3, title: "Episode III", count: 25 },
      { answer: 4, title: "Episode IV", count: 5 },
      { answer: 5, title: "Episode V", count: 3 },
      { answer: 6, title: "Episode VI", count: 3 }
    ]
  },
  {
    id: "4",
    title: "Best city to live:",
    type: QuestionType.Closed,
    created: 1645132675,
    current: 1645132675,
    answers: [
      { answer: 1, title: "Wroclaw", count: 10 },
      { answer: 2, title: "London", count: 5 },
      { answer: 3, title: "Berlin", count: 13 },
      { answer: 4, title: "Las Palmas", count: 15 },
      { answer: 5, title: "Miami", count: 17 }
    ]
  }
];

export default {
  title: "Presentation summary for external user",
  component: PresentationLiveSummaryStory,
  args: { questions }
} as ComponentMeta<typeof PresentationLiveSummaryStory>;
