import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ListForm from "./ListForm.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    gratListItems: [],
    listLength: 0
  };

  handleAddGratitudeItem = (event, item) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        gratListItems: prevState.gratListItems.concat(item),
        listLength: prevState.listLength + 1
      };
    });
  };

  render() {
    const { gratListItems, listLength } = this.state;
    return (
      <div className="App">
        <h1>What are you grateful for today?</h1>
        <ListForm
          listLength={listLength}
          onClick={(e, item) => this.handleAddGratitudeItem(e, item)}
        />
        <ListContainer listItems={gratListItems} />
      </div>
    );
  }
}

export default App;
