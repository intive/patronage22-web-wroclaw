import { Card } from "@mui/material";
import { Diagram, DiagramType, Timer } from "@patronage-web/shared";
import { FeedbackQuestionAnswers } from "@patronage-web/shared-data";

interface LiveResultsViewProps {
  data: FeedbackQuestionAnswers;
}

export const LiveResultsView: React.FC<LiveResultsViewProps> = ({ data }) => {
  const { id, title, answers } = data;
  const questions = answers.map(e => e.title);
  const numberOfAnswers = answers.map(e => e.count);

  return (
    <Card id={`graph${id}`}>
      <Diagram labels={questions} title={title} data={numberOfAnswers} type={DiagramType.Bar} />
      <Timer seconds={15} />
    </Card>
  );
};
