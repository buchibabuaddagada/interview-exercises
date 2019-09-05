import "./Bar.scss";
import React from "react";
import ReactTooltip from 'react-tooltip'

function template() {
  return (
    <div className="bar" data-tip={this.props.bar} style={{
      height: this.props.bar + "px",
      backgroundColor: this.getRandomColor(),
      marginLeft: this.props.index * 80 + "px"
    }}>
    {/* External Tooltip Component to show values over the graph */}
    <ReactTooltip/>
    </div>
  )
};

export default template;
