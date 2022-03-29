import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";

import { DiagramType } from "../../types";
import { BarDiagram } from "./bar-diagram";

Chart.register(LinearScale, ChartDataLabels);

interface DiagramProps {
  labels: string[];
  values: number[];
  title: string;
  type: DiagramType;
}

export const Diagram: React.FC<DiagramProps> = ({ labels, values, title, type }) => {
  const diagramData = {
    labels,
    datasets: [
      {
        data: values
      }
    ]
  };

  const diagrams: Record<DiagramType, JSX.Element> = {
    [DiagramType.Bar]: <BarDiagram data={diagramData} title={title} />
  };

  return diagrams[type];
};
