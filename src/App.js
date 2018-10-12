import React, { Component } from "react";
import GratListContainer from "./GratListContainer";
import GratListForm from "./GratListForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GratHeader from "./GratHeader";

class App extends Component {
  state = {
    gratListItems: [],
    edit: false,
    editListItem: "",
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

  selectedListItem = item => {
    this.setState({
      edit: true,
      editListItem: item
    });
  };

  // handleEditGratitudeItem = item => {
  //   this.setState(prevState => {
  //     const newList = prevState.gratListItems.reduce((accum, x) => {
  //       if(item === x) {

  //       }
  //     }, [])
  //   })
  // }

  render() {
    const { gratListItems, listLength, edit, editListItem } = this.state;
    return (
      <div className="App">
        <GratHeader />
        <GratListContainer
          listItems={gratListItems}
          handleRemoveGratitudeItem={this.handleRemoveGratitudeItem}
          selectedListItem={this.selectedListItem}
        />
        <GratListForm
          listLength={listLength}
          handleAddGratitudeItem={this.handleAddGratitudeItem}
          editing={edit}
          editListItem={editListItem}
        />
      </div>
    );
  }
}

export default App;
