import { ParticipationQuestionAnswer } from "./participation-form";

export interface FeedbackQuestionResults {
  totalCount: number;
  answers: ParticipationQuestionAnswer[];
}

export interface FeedbackResults {
  questionResults: FeedbackQuestionResults[];
}
