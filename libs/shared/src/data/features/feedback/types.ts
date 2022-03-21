export enum FeedbackSliceName {
  Presentations = "presentations"
}

export interface Question {
  id: string;
  content: string;
  answers: string[];
  answer: string;
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
