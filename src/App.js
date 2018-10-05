import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ListForm from "./ListForm.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    gratListItems: ["family", "free food", "housing situation"]
  };

  handleAddGratitudeItem = item => {
    this.setState({ gratListItems: this.state.gratListItems.concat(item) });
  };

  render() {
    const { gratListItems } = this.state;
    return (
      <div className="App">
        <h1>What are you grateful for today?</h1>
        <ListForm onClick={item => this.handleAddGratitudeItem(item)} />
        <ListContainer listItems={gratListItems} />
      </div>
    );
  }
}

export default App;
