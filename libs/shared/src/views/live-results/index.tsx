import { Card } from "@mui/material";

import { ResultsChart, Timer } from "../../components";
import { LiveResultAnswers } from "../../data";

interface LiveResultsViewProps {
  chartData: LiveResultAnswers;
}

export const LiveResultsView: React.FC<LiveResultsViewProps> = ({ chartData }) => {
  const { id, title, answers } = chartData;
  const questions = answers.map(e => e.title);
  const numberOfAnswers = answers.map(e => e.count);

  return (
    <Card id={`chart${id}`}>
      <ResultsChart labels={questions} title={title} data={numberOfAnswers} />
      <Timer seconds={15} />
    </Card>
  );
};
