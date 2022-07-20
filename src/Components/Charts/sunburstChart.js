import React, { useEffect, useState } from "react";

import HighCharts from "highcharts";
import HighchartsSunburst from "highcharts/modules/sunburst";
HighchartsSunburst(HighCharts);

const SunburstChart = ({ chartId, chartData }) => {
  useEffect(() => {
    const columnOptions = getColumnOptions();
    HighCharts.chart(chartId, columnOptions);
  }, [chartId]);

  HighCharts.getOptions().colors.splice(0, 0, "transparent");

  function getColumnOptions() {
    return {
      chart: {
        height: "400",
        type: "pie",
      },

      title: {
        text: "Khoros Emp Count (Sun Burst Chart)",
      },
      credits: {
        // Removes the highchart link
        enabled: false,
      },

      series: [
        {
          type: "sunburst",
          data: chartData,
          allowDrillToNode: true,
          cursor: "pointer",
          dataLabels: {
            formatter: function () {
              var shape = this.point.node.shapeArgs;

              var innerArcFraction = (shape.end - shape.start) / (2 * Math.PI);
              var perimeter = 2 * Math.PI * shape.innerR;

              var innerArcPixels = innerArcFraction * perimeter;

              if (innerArcPixels > 16) {
                return this.point.name;
              }
            },
          },
        },
      ],
      tooltip: {
        headerFormat: "",
        pointFormat:
          "The total no of emp in <b>{point.name}</b> is <b>{point.value}</b>",
      },
    };
  }

  return <div id={chartId} />;
};

export default SunburstChart;
