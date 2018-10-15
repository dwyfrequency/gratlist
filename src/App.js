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
    disabled: false
  };

  isDisabled = () => {
    if (this.state.gratListItems.length >= 4) {
      return true;
      // this.setTimer();
    } else {
      return false;
    }
  };

  resetState = () => {
    this.setState({
      gratListItems: [],
      edit: false,
      editListItem: "",
      disabled: false
    });
  };

  // output gratlist to localstorage with date stamp
  saveList = () => {
    const listObj = {
      ...this.state.gratListItems,
      date: new Date().toISOString
    };
    localStorage.setItem("gratitudeList", JSON.stringify(listObj));
  };

  setTimer = () => {
    setTimeout(() => {
      this.saveList();
      this.resetState();
    }, 3000);
  };

  handleAddGratitudeItem = item => {
    this.setState(prevState => {
      const newList = prevState.gratListItems.concat(item);
      return {
        gratListItems: newList,
        disabled: this.isDisabled()
      };
    });
  };

  handleRemoveGratitudeItem = item => {
    this.setState(prevState => {
      const newList = prevState.gratListItems.filter(i => i !== item);
      return {
        gratListItems: newList,
        disabled: this.isDisabled()
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
    const { gratListItems, edit, editListItem, disabled } = this.state;
    return (
      <div className="App">
        <GratHeader />
        <GratListContainer
          listItems={gratListItems}
          handleRemoveGratitudeItem={this.handleRemoveGratitudeItem}
          selectedListItem={this.selectedListItem}
        />
        <GratListForm
          disabled={disabled}
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
