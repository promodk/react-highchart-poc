import React from 'react';
import "../Styles/App.scss";
import LineChart from "./Charts/lineChart";
import DonutChart from "./Charts/donutChart";
import SunburstChart from "./Charts/sunburstChart";
import StackedAreaChart from "./Charts/stackedAreaChart";

import {
  lineChartData,
  lineChartCategory,
  donutChartData,
  stackedAreaChartData,
  stackAreaXAxisData,
  sunburstChartData
} from "../Mocks/mockData";
interface IProps {
}


const App = (props: IProps): React.ReactElement => {
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
      <div className="bottom-container">
        <div className="chart-container-3">
          <SunburstChart chartId={"3"} chartData= {sunburstChartData}/>
        </div>
        <div className="chart-container-4">
          <StackedAreaChart
            chartId={"4"}
            stackAreaXAxisData={stackAreaXAxisData}
            chartData={stackedAreaChartData}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
