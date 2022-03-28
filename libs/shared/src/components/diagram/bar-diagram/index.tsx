import { DIAGRAM_CONFIG } from "../../../configs";
import { DiagramType } from "../../../types";
import { getDiagramOptions } from "../../../utils";
import * as Styled from "./styled";

interface BarProps {
  diagramData: { labels: string[]; datasets: any[] };
  title: string;
}

export const BarDiagram: React.FC<BarProps> = ({ diagramData, title }) => (
  <Styled.DiagramBar data={diagramData} options={getDiagramOptions(DiagramType.Bar, title)} height={DIAGRAM_CONFIG.height} />
);
