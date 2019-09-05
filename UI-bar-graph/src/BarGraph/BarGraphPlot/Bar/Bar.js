import React    from "react";
import template from "./Bar.jsx";

/** Bar Component to show as data identities */
class Bar extends React.Component {

  constructor(props){
    super(props);

    this.getRandomColor = this.getRandomColor.bind(this);
  }

  /** Generate the random colors for the scale bar's in the graph */
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return template.call(this);
  }
}

export default Bar;
