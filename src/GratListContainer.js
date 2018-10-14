import React, { Component } from "react";
import "./GratListContainer.css";
import GratListItem from "./GratListItem";

class GratListContainer extends Component {
  render() {
    const { handleRemoveGratitudeItem, selectedListItem } = this.props;
    return (
      <ul className="list-group">
        {this.props.listItems.map((gratEntry, idx) => {
          return (
            <GratListItem
              key={idx}
              gratEntry={gratEntry}
              handleRemoveGratitudeItem={handleRemoveGratitudeItem}
              selectedListItem={selectedListItem}
            />
          );
        })}
      </ul>
    );
  }
}

export default GratListContainer;
