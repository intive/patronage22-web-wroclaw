import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";

import { DiagramType } from "../../types";
import { BarDiagram } from "./bar-diagram";

Chart.register(LinearScale, ChartDataLabels);

interface DiagramProps {
  titles: string[];
  counts: number[];
  title: string;
  type: DiagramType;
}

export const Diagram: React.FC<DiagramProps> = ({ titles, counts, title, type }) => {
  const diagramData = {
    labels: titles,
    datasets: [
      {
        data: counts
      }
    ]
  };

  const diagrams: Record<DiagramType, JSX.Element> = {
    [DiagramType.Bar]: <BarDiagram diagramData={diagramData} title={title} />
  };

  return diagrams[type];
};
