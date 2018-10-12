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

  handleEditGratitudeItem = newListitem => {
    this.setState(prevState => {
      const newList = prevState.gratListItems.reduce((accum, listItem) => {
        if (prevState.editListItem === listItem) {
          return accum.concat(newListitem);
        }
        return accum.concat(listItem);
      }, []);
      return { gratListItems: newList, edit: false, editListItem: "" };
    });
  };

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
          handleEditGratitudeItem={this.handleEditGratitudeItem}
        />
      </div>
    );
  }
}

export default App;
