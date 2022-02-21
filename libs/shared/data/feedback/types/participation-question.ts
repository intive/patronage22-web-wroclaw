export interface ParticipationQuestion {
  id: string;
  questionNumber: number;
  title: string;
  type: string; // ParticipationQuestionType;
  answers?: string[];
  created: number;
  current: number;
  maxAnswerTime: number;
}
