import "./BarGraph.scss";
import React from "react";
import BarGraphPlot from "./BarGraphPlot/index";

function template() {
  return (
    <div className="bar-graph">
      <h4>React Bar Graph</h4>
      <BarGraphPlot graphData={this.state.graphdata}></BarGraphPlot>
    </div>
  );
};

export default template;
