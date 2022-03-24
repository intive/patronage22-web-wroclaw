import { DIAGRAM_CONFIG } from "./config";
import * as Styled from "./styled";

interface BarProps {
  diagramData: any;
  title: string;
}
export const BarDiagram: React.FC<BarProps> = ({ diagramData, title }) => (
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
);
