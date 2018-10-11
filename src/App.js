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

  handleAddGratitudeItem = item => {
    this.setState(prevState => {
      const newList = prevState.gratListItems.concat(item);
      return {
        gratListItems: newList,
        listLength: newList.length
      };
    });
  };

  handleRemoveGratitudeItem = item => {
    this.setState(prevState => {
      const newList = prevState.gratListItems.filter(i => i !== item);
      return {
        gratListItems: newList,
        listLength: newList.listLength
      };
    });
  };

  render() {
    const { gratListItems, listLength } = this.state;
    return (
      <div className="App">
        <GratHeader />
        <GratListContainer
          listItems={gratListItems}
          handleRemoveGratitudeItem={this.handleRemoveGratitudeItem}
        />
        <GratListForm
          listLength={listLength}
          onClick={this.handleAddGratitudeItem}
        />
      </div>
    );
  }
}

export default App;
