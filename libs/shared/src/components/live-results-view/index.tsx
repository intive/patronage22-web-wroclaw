import { Dialog } from "@mui/material";

import { Stoper } from "../stoper";
import { MyChart } from "./chart";
import * as mocks from "./mocks";

interface LiveResultsViewProps {
  isOpen: boolean;
}

export const LiveResultsView: React.FC<LiveResultsViewProps> = ({ isOpen }) => {
  return (
    <Dialog open={isOpen}>
      <MyChart labels={mocks.data.question.answers} title={mocks.data.question.title} data={mocks.currentAnswers} />
      <Stoper seconds={15} />
    </Dialog>
  );
};
