import React, { useEffect } from "react";
import HighCharts from "highcharts";

export interface IProps {
  chartId: any;
  chartData: any;
  lineChartCategory: any;
}

const LineChart = (props: IProps): React.ReactElement => {
  const { chartId, chartData, lineChartCategory } = props;
  useEffect(() => {
    const columnOptions: any = getColumnOptions();
    HighCharts.chart(chartId, columnOptions);
  }, [chartId]);

  const getColumnOptions = () => {
    return {
      title: {
        text: "Solutions(Line Chart)",
        x: -20, //center
      },
      xAxis: {
        categories: lineChartCategory,
        labels: {
          enabled: false,
        },
        title: {
          text: "",
        },
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: "",
        },
      },
      legend: {
        // disabled legends
        enabled: false,
      },
      credits: {
        // Removes the highchart link
        enabled: false,
      },

      plotOptions: {
        series: {
          marker: {
            enabled: false,
          },
          dataLabels: {
            enabled: false,
          },
          cursor: "pointer",
        },
      },

      series: [
        {
          data: chartData,
          color: "#808000",
        },
      ],
    };
  };

  return <div id={chartId} />;
};

export default LineChart;
