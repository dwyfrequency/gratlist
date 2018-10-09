import React, { Component } from "react";
import "./ListForm.css";

class ListForm extends Component {
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
        <div className="form-group row">
          <label htmlFor="gratitudeEntry" className="col-sm-2 col-form-label">
            Gratitude Entry
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="gratitudeEntry"
              className="form-control"
              value={this.state.gratitudeEntry}
              onChange={this.onFieldChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={e => this.props.onClick(e, gratitudeEntry)}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ListForm;
