export enum QuestionType {
  Open = "open",
  Closed = "closed"
}

export interface AnswerResult {
  title: string;
  count: number;
  answer: number;
}

export interface FeedbackQuestionAnswers {
  id: string;
  title: string;
  type: QuestionType;
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
  content: string;
  type: QuestionType;
  answers?: string[];
  answer: string;
}
