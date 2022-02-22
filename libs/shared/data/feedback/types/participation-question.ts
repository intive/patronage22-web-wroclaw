import { ParticipationQuestionType } from "./participation-question-type";

export interface ParticipationQuestion {
  id: string;
  questionNumber: number;
  title: string;
  type: ParticipationQuestionType;
  answers?: string[];
  defaultAnswer?: string;
  created: number;
  current: number;
  maxAnswerTime: number;
}
