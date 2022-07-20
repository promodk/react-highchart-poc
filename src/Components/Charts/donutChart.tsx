import React, { useEffect } from "react";
import HighCharts from "highcharts";

export interface IProps {
  chartId: any;
  chartData: any;
}

const LineChart = (props: IProps): React.ReactElement => {

  const { chartId, chartData } = props

  useEffect(() => {
    const columnOptions: any = getColumnOptions();
    HighCharts.chart(chartId, columnOptions);
  }, [chartId]);

  const getColumnOptions = () => {
    return {
      title: {
        text: "Khoros Employee No.(Donut Chart)",
      },
      credits: {
        // Removes the highchart link
        enabled: false,
      },
      tooltip: {
        // Disabled tooltip
        enabled: false,
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      plotOptions: {
        pie: {
          borderWidth: 2,
          dataLabels: {
            enabled: true,
            color: "rgba(0,0,0,0.87)",
            style: {
              fontWeight: "600",
              textOutline: "none",
            },
            connectorWidth: 0, // connector is removed
            distance: 20, // distace of the labels from the chart
            formatter(this:any) {
              // formatting for the labels
              return `${this.y}<br> ${this.point.name}`;
            },
          },
        },
      },
      series: [
        {
          type: "pie",
          innerSize: "50%",
          data: chartData, // chart data
        },
      ],
    };
  };

  return <div id={chartId} />;
};

export default LineChart;
