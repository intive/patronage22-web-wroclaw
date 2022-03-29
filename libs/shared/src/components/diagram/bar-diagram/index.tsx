import { DIAGRAM_CONFIG } from "../../../configs";
import { DiagramType } from "../../../types";
import { getDiagramOptions } from "../../../utils";
import * as Styled from "./styled";

interface BarDiagramProps {
  data: { labels: string[]; datasets: any[] };
  title: string;
}

export const BarDiagram: React.FC<BarDiagramProps> = ({ data, title }) => (
  <Styled.BarDiagramWrapper data={data} options={getDiagramOptions(DiagramType.Bar, title)} height={DIAGRAM_CONFIG.height} />
);
