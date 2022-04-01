import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { DiagramType } from "../../types";
import { BarDiagram } from "./bar-diagram";
import { getDiagramConfig } from "./get-diagram-config";

Chart.register(LinearScale, ChartDataLabels);

interface DiagramProps {
  labels: string[];
  values: number[];
  title: string;
  type: DiagramType;
}

export const Diagram: React.FC<DiagramProps> = ({ labels, values, title, type }) => {
  const { data, options } = getDiagramConfig(DiagramType.Bar, title, labels, values);

  const diagrams: Record<DiagramType, JSX.Element> = {
    [DiagramType.Bar]: <BarDiagram data={data} title={title} options={options} />
  };

  return diagrams[type];
};
