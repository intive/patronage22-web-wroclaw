import { DiagramType } from "..";
import { DIAGRAM_CONFIG } from "./config";
import * as Styled from "./styled";
import { useDiagramOptions } from "./use-diagram-options";

interface BarProps {
  diagramData: { labels: string[]; datasets: any[] };
  title: string;
}
export const BarDiagram: React.FC<BarProps> = ({ diagramData, title }) => (
  <Styled.DiagramBar data={diagramData} options={useDiagramOptions(DiagramType.Bar, title)} height={DIAGRAM_CONFIG.height} />
);
