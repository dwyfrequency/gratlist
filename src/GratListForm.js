import React, { Component } from "react";
import "./GratListForm.css";
import Button from "./Button";

class GratListForm extends Component {
  state = {
    gratitudeEntry: this.props.editListItem
  };

  /* Desired Action: when I click on a list item, have it populate the input form. Once   */

  resetForm = () => {
    this.setState({ gratitudeEntry: "" });
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.editListItem !== "") {
      this.setState({ gratitudeEntry: nextProps.editListItem });
    }
  }

  render() {
    const { gratitudeEntry } = this.state;
    const {
      handleAddGratitudeItem,
      handleEditGratitudeItem,
      listLength,
      editing,
      disabled
    } = this.props;
    const btn = editing ? (
      <input
        type="button"
        value="Edit"
        onClick={() => {
          handleEditGratitudeItem(gratitudeEntry);
          this.resetForm();
        }}
        className="btn btn-warning"
        id="btn-grat"
      />
    ) : (
      <input
        type="button"
        value="Add"
        onClick={() => {
          handleAddGratitudeItem(gratitudeEntry);
          this.resetForm();
        }}
        className="btn btn-primary mt-2"
        disabled={disabled}
      />
    );
    return (
      <form>
        <div className="AddGratitudeForm">
          <label htmlFor="gratitudeEntry">Gratitude Entry</label>
          <input
            type="text"
            name="gratitudeEntry"
            value={gratitudeEntry}
            onChange={this.onFieldChange}
          />
          {btn}
        </div>
      </form>
    );
  }
}

export default GratListForm;
