export enum ParticipationQuestionType {
  Open = "Open",
  Closed = "Closed"
}

export interface AnswerResult {
  title: string;
  count: number;
  answer: number;
}

export interface FeedbackQuestionAnswers {
  id: string;
  title: string;
  type: ParticipationQuestionType;
  created: number;
  current: number;
  answers: AnswerResult[];
}
