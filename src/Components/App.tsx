import React, {Component} from 'react';
import "../Styles/App.scss";
import LineChart from "./lineChart";

import {
  lineChartData,
  lineChartCategory
} from "../Mocks/mockData";

const App = () => {
  return (
    <div className="App">
      <div className="top-container">
        <div className="chart-container-1">
          <LineChart chartId={"1"} chartData={lineChartData} lineChartCategory={lineChartCategory} />
        </div>
      </div>
    </div>
  );
};

export default App;
