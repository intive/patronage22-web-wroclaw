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

export enum QuestionType {
  Open = "Open",
  Closed = "Closed"
}

export interface ExternalQuestion {
  id: string;
  number: number;
  title: string;
  type: QuestionType;
  answers?: string[];
  defaultAnswer?: string;
}
