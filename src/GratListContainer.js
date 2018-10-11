import React, { Component } from "react";
import "./GratListContainer.css";
import GratListItem from "./GratListItem";

class GratListContainer extends Component {
  render() {
    const { handleRemoveGratitudeItem } = this.props;
    return (
      <ul className="list-group">
        {this.props.listItems.map((gratEntry, idx) => {
          // mx-auto: horiz centers li
          // mb-2: applies a margin bottom
          return (
            <GratListItem
              key={idx}
              gratEntry={gratEntry}
              handleRemoveGratitudeItem={handleRemoveGratitudeItem}
            />
          );
        })}
      </ul>
    );
  }
}

export default GratListContainer;