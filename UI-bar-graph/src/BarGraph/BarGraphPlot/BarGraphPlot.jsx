import "./BarGraphPlot.scss";
import React from "react";
import Bar from "./Bar/index";

function template() {
  return (
    <div className="bar-graph-plot">
      {
        this.props.graphData.map((value, key) => {
          return <Bar key={key} index={key + 1} bar={value}></Bar>
        })
      }
    </div>
  );
};

export default template;
