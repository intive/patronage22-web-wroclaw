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

export interface ExternalPresentation {
  id: string;
  name: string;
  description?: string;
  email: string;
  timer: number;
  startTime: number;
  currentTime: number;
  link: string;
  status: string;
  isPublic: boolean;
  questions: ExternalQuestion[];
}

export interface ExternalQuestion {
  id: string;
  number: number;
  title: string;
  type: ParticipationQuestionType;
  answers?: string[];
  defaultAnswer?: string;
}
