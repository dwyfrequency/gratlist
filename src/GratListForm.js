import React, { Component } from "react";
import "./GratListForm.css";
import Button from "./Button";

class GratListForm extends Component {
  state = {
    gratitudeEntry: ""
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { gratitudeEntry } = this.state;
    return (
      <form>
        <div className="AddGratitudeForm">
          <label htmlFor="gratitudeEntry">Gratitude Entry</label>
          <input
            type="text"
            name="gratitudeEntry"
            value={this.state.gratitudeEntry}
            onChange={this.onFieldChange}
          />
          <input
            type="button"
            value="Add"
            onClick={e => this.props.onClick(e, gratitudeEntry)}
            className="btn btn-primary"
            id="btn-grat"
            disabled={this.props.listLength >= 5}
          />
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
