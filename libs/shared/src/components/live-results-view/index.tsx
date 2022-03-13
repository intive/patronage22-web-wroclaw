import { Dialog } from "@mui/material";

import { MyChart } from "./chart";

const data = {
  question: { first: "How many apples?", answers: ["two", "one", "four", "seven"] }
};

const currentAnswers = [10, 0, 0, 5];

export const LiveResultsView: React.FC = () => (
  <Dialog open>
    <MyChart labels={data.question.answers} title={data.question.first} data={currentAnswers} />
  </Dialog>
);
