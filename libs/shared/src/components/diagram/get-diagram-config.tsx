import { DIAGRAM_CONFIG } from "../../configs";
import { DiagramType } from "../../types";

export const getDiagramConfig = (type: DiagramType, title: string, labels: string[], values: number[]) => {
  const data = {
    labels,
    datasets: [
      {
        data: values
      }
    ]
  };

  const options: Record<DiagramType, any> = {
    [DiagramType.Bar]: {
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
    }
  };

  return { data, options: options[type] };
};
