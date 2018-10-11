import React from "react";

const GratListItem = props => {
  const { gratEntry, handleRemoveGratitudeItem } = props;
  console.log(handleRemoveGratitudeItem);
  return (
    <li
      className="list-group-item mx-auto mb-2"
      style={{ width: "80%" }}
      onClick={() => console.log("btn clicjed")}
    >
      {props.gratEntry}
      {/* https://stackoverflow.com/questions/38619981/react-prevent-event-bubbling-in-nested-components-on-click */}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={() => handleRemoveGratitudeItem(gratEntry)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
};

export default GratListItem;
