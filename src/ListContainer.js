import React, { Component } from "react";
import "./ListContainer.css";

class ListContainer extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.listItems.map((item, idx) => {
          // mx-auto: horiz centers li
          // mb-2: applies a margin bottom
          return (
            <li
              className="list-group-item mx-auto mb-2"
              style={{ width: "80%" }}
              key={idx}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListContainer;
