import { ParticipationQuestion } from "./participation-question";

export interface ParticipationForm {
  questions: ParticipationQuestion[];
  id: string;
}
