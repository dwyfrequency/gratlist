import React from "react";

const GratListItem = props => {
  const { gratEntry, handleRemoveGratitudeItem, selectedListItem } = props;
  console.log(handleRemoveGratitudeItem);
  return (
    <li className="list-group-item mx-auto mb-2" style={{ width: "80%" }}>
      {/* put text in span so we can click the text to edit it and the button can have a seperate onClick without propagation issues */}
      <span onClick={() => selectedListItem(gratEntry)}>{gratEntry}</span>
      {/* https://stackoverflow.com/questions/38619981/react-prevent-event-bubbling-in-nested-components-on-click 
      consider changing button to a component to prevent event propagation
      click delegation*/}
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
