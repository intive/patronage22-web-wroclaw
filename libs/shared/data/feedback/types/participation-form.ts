export interface ParticipationForm {
  questions: ParticipationQuestion[];
  id: string;
}

export interface ParticipationQuestionAnswer {
  questionId: number;
  count: number;
  title: string;
}

export enum ParticipationQuestionType {
  Open = "Open",
  Closed = "Closed"
}

export interface ParticipationQuestion {
  id: string;
  number: number;
  title: string;
  type: ParticipationQuestionType;
  answers?: string[];
  defaultAnswer?: string;
  created: number;
  current: number;
  maxAnswerTime: number;
}
