import { DiagramType } from "@patronage-web/shared";

import { DIAGRAM_CONFIG } from "../../../configs";
import * as Styled from "./styled";

interface BarDiagramProps {
  data: { labels: string[]; datasets: any[] };
  title: string;
  options: Record<DiagramType, any>;
}

export const BarDiagram: React.FC<BarDiagramProps> = ({ data, options }) => (
  <Styled.BarDiagramWrapper data={data} options={options} height={DIAGRAM_CONFIG.height} />
);
