import React from "react";

const GratListItem = props => {
  return (
    <li className="list-group-item mx-auto mb-2" style={{ width: "80%" }}>
      {props.children}
    </li>
  );
};

export default GratListItem;
