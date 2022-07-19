import React, { useEffect } from "react";
import HighCharts from "highcharts";

const LineChart = ({ chartId, chartData, lineChartCategory }) => {
  useEffect(() => {
    const columnOptions = getColumnOptions();
    HighCharts.chart(chartId, columnOptions);
  }, [chartId]);

  const getColumnOptions = () => {
    return {
      title: {
        text: "Solutions",
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
        },
      ],
    };
  };

  return <div id={chartId} />;
};

export default LineChart;
