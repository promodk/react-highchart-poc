import React, {Component} from 'react';
import "../Styles/App.scss";
import LineChart from "./Charts/lineChart";
import DonutChart from "./Charts/donutChart";


import {
  lineChartData,
  lineChartCategory,
  donutChartData
} from "../Mocks/mockData";

const App = () => {
  return (
    <div className="App">
      <div className="top-container">
        <div className="chart-container-1">
          <LineChart chartId={"1"} chartData={lineChartData} lineChartCategory={lineChartCategory} />
        </div>
        <div className="chart-container-2">
        <DonutChart chartId={"2"} chartData={donutChartData} />
        </div>
      </div>
    </div>
  );
};

export default App;
