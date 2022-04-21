export enum FeedbackSliceName {
  Presentations = "presentations",
  ExternalPresentation = "externalPresentation"
}

export interface Question {
  id: string;
  content: string;
  answers: Answer[];
}

export interface Answer {
  content: string;
  count: number;
  answer: number;
}

export interface Presentation {
  id: string;
  name: string;
  description: string;
  email: string;
  startTime: Date;
  currentTime: Date;
  timer: number;
  link: string;
  status: "ACTIVE" | "COMPLETED" | "DRAFT";
  isPublic: boolean;
  questions: Question[];
}
