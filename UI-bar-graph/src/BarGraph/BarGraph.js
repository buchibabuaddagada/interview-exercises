import React    from "react";
import template from "./BarGraph.jsx";

/** Graph Component to embed as Graph in Application*/
class BarGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'graphdata': this.props.graphData.data};
  }

  render() {
    return template.call(this);
  }
}

export default BarGraph;
