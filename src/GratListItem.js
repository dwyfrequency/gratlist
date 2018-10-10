import React from "react";

const GratListItem = props => {
  return (
    <li className="list-group-item mx-auto mb-2" style={{ width: "80%" }}>
      {props.gratEntry}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={event =>
          props.handleRemoveGratitudeItem(event, props.gratEntry)
        }
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
};

export default GratListItem;
