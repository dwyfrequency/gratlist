import React, { Component } from "react";
import "./GratListContainer.css";
import GratListItem from "./GratListItem";

class GratListContainer extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.listItems.map((gratEntry, idx) => {
          // mx-auto: horiz centers li
          // mb-2: applies a margin bottom
          return <GratListItem key={idx}>{gratEntry}</GratListItem>;
        })}
      </ul>
    );
  }
}

export default GratListContainer;
