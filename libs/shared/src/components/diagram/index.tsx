import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";

import { BarDiagram } from "./bar-diagram";

Chart.register(LinearScale, ChartDataLabels);

interface DiagramProps {
  questionsTitles: string[];
  questionsCounts: number[];
  title: string;
  type: DiagramType;
}

export enum DiagramType {
  Bar = "Bar"
}

export const Diagram: React.FC<DiagramProps> = ({ questionsTitles, questionsCounts, title, type }) => {
  const diagramData = {
    labels: questionsTitles,
    datasets: [
      {
        data: questionsCounts
      }
    ]
  };

  const diagrams: Record<DiagramType, JSX.Element> = {
    [DiagramType.Bar]: <BarDiagram diagramData={diagramData} title={title} />
  };

  return diagrams[type];
};
