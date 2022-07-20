import React, { useEffect } from "react";
import HighCharts from "highcharts";

const LineChart = ({ chartId, stackAreaXAxisData, chartData }) => {
  useEffect(() => {
    const columnOptions = getColumnOptions();
    HighCharts.chart(chartId, columnOptions);
  }, [chartId]);

  function getColumnOptions() {
    return {
      chart: {
        type: "area",
        height: "400",
      },
      title: {
        text: "Member Engagement (Stacked Area Chart)",
      },
      credits: {
        // Removes the highchart link
        enabled: false,
      },
      xAxis: {
        categories: stackAreaXAxisData,
        tickmarkPlacement: "off",
        title: {
          enabled: false,
        },
        labels: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          enabled: false,
        },
      },
      tooltip: {
        split: true,
        valueSuffix: " millions",
      },
      plotOptions: {
        area: {
          stacking: "normal",
          lineWidth: 0,
          marker: {
            enabled: false,
          },
        },
      },
      series: chartData,
    };
  }

  return <div id={chartId} />;
};

export default LineChart;
