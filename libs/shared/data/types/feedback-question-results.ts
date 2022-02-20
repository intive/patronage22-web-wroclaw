import { ParticipationQuestionAnswer } from "./participation-question-answer";

export interface FeedbackQuestionResults {
  totalCount: number;
  answers: ParticipationQuestionAnswer[];
}
