import React from "react";

class FromSquare extends React.Component {
  render() {
    return <p className="move-description--from">{this.props.position} →</p>;
  }
}

export default FromSquare;
