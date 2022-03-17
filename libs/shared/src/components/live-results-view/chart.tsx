import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { CHART_STYLING } from "./constants";
import { ChartBar } from "./styled";

interface MyChartProps {
  labels: string[];
  data: number[];
  title: string;
}

export const MyChart: React.FC<MyChartProps> = ({ labels, data, title }) => {
  Chart.register(LinearScale, ChartDataLabels);

  const chartData = {
    labels,
    datasets: [
      {
        data
      }
    ]
  };

  return (
    <ChartBar
      data={chartData}
      options={{
        plugins: {
          datalabels: {
            anchor: "start",
            align: "top",
            offset: CHART_STYLING.offset
          },
          title: {
            display: true,
            align: "start",
            font: { size: CHART_STYLING.fontSize },
            padding: { top: CHART_STYLING.paddingTop, bottom: CHART_STYLING.paddingBottom },
            text: title
          },
          legend: {
            display: false
          }
        },
        datasets: {
          bar: {
            borderRadius: CHART_STYLING.borderRadius,
            backgroundColor: "lightgrey"
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
              borderWidth: CHART_STYLING.borderWidth,
              borderColor: "grey"
            },
            ticks: {
              showLabelBackdrop: true
            }
          }
        }
      }}
      height={CHART_STYLING.height}
    />
  );
};
