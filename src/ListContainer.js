import React, { Component } from "react";
import "./ListContainer.css";

class ListContainer extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.listItems.map((item, idx) => {
          return (
            <li
              className="list-group-item mx-auto"
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
