import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";

import { BarDiagram } from "./bar-diagram";

Chart.register(LinearScale, ChartDataLabels);

interface DiagramProps {
  answersTitles: string[];
  answersCounts: number[];
  title: string;
  type: DiagramType;
}

export enum DiagramType {
  Bar = "Bar"
}

export const Diagram: React.FC<DiagramProps> = ({ answersTitles, answersCounts, title, type }) => {
  const diagramData = {
    labels: answersTitles,
    datasets: [
      {
        data: answersCounts
      }
    ]
  };

  const diagrams: Record<DiagramType, JSX.Element> = {
    [DiagramType.Bar]: <BarDiagram diagramData={diagramData} title={title} />
  };

  return diagrams[type];
};
