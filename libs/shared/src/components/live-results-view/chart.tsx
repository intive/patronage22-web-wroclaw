import { LinearScale } from "chart.js";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
            offset: 1
          },
          title: {
            display: true,
            align: "start",
            font: { size: 16 },
            padding: { top: 0, bottom: 14 },
            text: title
          },
          legend: {
            display: false
          }
        },
        datasets: {
          bar: {
            borderRadius: 4,
            backgroundColor: "lightgrey"
          }
        },
        scales: {
          y: {
            display: false,
            min: -0.5,
            grid: {
              display: false
            }
          },
          x: {
            grid: {
              display: false,
              borderWidth: 2,
              borderColor: "grey"
            },
            ticks: {
              showLabelBackdrop: true
            }
          }
        }
      }}
      height={200}
    />
  );
};
