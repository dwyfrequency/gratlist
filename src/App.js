import React, { Component } from "react";
import GratListContainer from "./GratListContainer";
import GratListForm from "./GratListForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GratHeader from "./GratHeader";

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
        <GratHeader />
        <GratListContainer listItems={gratListItems} />
        <GratListForm
          listLength={listLength}
          onClick={(e, item) => this.handleAddGratitudeItem(e, item)}
        />
      </div>
    );
  }
}

export default App;
