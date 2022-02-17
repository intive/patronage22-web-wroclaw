import { QuestionType } from "./question-type";

export interface Question {
  id: number;
  content: string;
  type: QuestionType;
  answers: string[] | null;
  created: number;
  current: number;
  maxAnswerTime: number;
}
