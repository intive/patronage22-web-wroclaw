import { ChartDataset, LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";

import { BarDiagram } from "./bar-diagram";

Chart.register(LinearScale, ChartDataLabels);

interface DiagramProps {
  labels?: string[];
  data: ChartDataset<any, unknown>[];
  title: string;
  type: DiagramType;
}

export enum DiagramType {
  Bar = "Bar"
}

export const Diagram: React.FC<DiagramProps> = ({ labels, data, title, type }) => {
  const diagramData = {
    labels,
    datasets: [
      {
        data
      }
    ]
  };

  const diagrams: Record<DiagramType, JSX.Element> = {
    [DiagramType.Bar]: <BarDiagram diagramData={diagramData} title={title} />
  };

  return diagrams[type];
};
