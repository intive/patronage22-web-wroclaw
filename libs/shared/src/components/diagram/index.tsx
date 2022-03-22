import { ChartDataset, LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";

import { DIAGRAM_CONFIG } from "./config";
import * as Styled from "./styled";

Chart.register(LinearScale, ChartDataLabels);

interface DiagramProps {
  labels: string[] | undefined;
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

  const diagramOptions: Record<DiagramType, JSX.Element> = {
    [DiagramType.Bar]: (
      <Styled.DiagramBar
        data={diagramData}
        options={{
          plugins: {
            datalabels: {
              anchor: "start",
              align: "top",
              offset: DIAGRAM_CONFIG.offset
            },
            title: {
              display: true,
              align: "start",
              font: { size: DIAGRAM_CONFIG.fontSize },
              padding: { top: DIAGRAM_CONFIG.paddingTop, bottom: DIAGRAM_CONFIG.paddingBottom },
              text: title
            },
            legend: {
              display: false
            }
          },
          datasets: {
            bar: {
              borderRadius: DIAGRAM_CONFIG.borderRadius,
              backgroundColor: DIAGRAM_CONFIG.bacgroundColorLight
            }
          },
          scales: {
            y: {
              display: false,
              grid: {
                display: false
              }
            },
            x: {
              grid: {
                display: false,
                borderWidth: DIAGRAM_CONFIG.borderWidth,
                borderColor: DIAGRAM_CONFIG.backgroundColor
              },
              ticks: {
                showLabelBackdrop: true
              }
            }
          }
        }}
        height={DIAGRAM_CONFIG.height}
      />
    )
  };

  return diagramOptions[type];
};
