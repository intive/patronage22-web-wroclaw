import { ParticipationQuestionType } from "./participation-question-type";

export interface ParticipationQuestion {
  id: number;
  title: string;
  type: ParticipationQuestionType;
  answers?: string[];
  created: number;
  current: number;
  maxAnswerTime: number;
}
