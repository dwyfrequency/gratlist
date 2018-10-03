import React, { Component } from "react";

class ListContainer extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.listItems.map((item, idx) => {
          return (
            <li className="list-group-item" key={idx}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListContainer;
