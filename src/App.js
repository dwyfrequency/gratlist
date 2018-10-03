import React, { Component } from "react";
import ListContainer from "./ListContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    gratListItems: ["family", "free food", "housing situation"]
  };
  render() {
    const { gratListItems } = this.state;
    return (
      <div className="App">
        <h1>What are you grateful for today?</h1>
        <ListContainer listItems={gratListItems} />
      </div>
    );
  }
}

export default App;
