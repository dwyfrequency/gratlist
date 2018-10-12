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
      listLength,
      editing,
      editListItem
    } = this.props;
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
          {editing ? (
            <input
              type="button"
              value="Edit"
              onClick={() => this.setState({ gratitudeEntry: editListItem })}
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
              className="btn btn-primary"
              id="btn-grat"
              disabled={listLength >= 5}
            />
          )}

          {/* <Button
            value="Add"
            onClick={e => this.props.onClick(e, gratitudeEntry)}
            className="btn btn-primary"
            disabled={this.props.listLength >= 5}
          /> */}
        </div>
      </form>
    );
  }
}

export default GratListForm;
