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

  componentDidMount = () => {
    // consider switching this to axios
    // I may want to store the data in firebase as an object an not an array so i dont have to specify the index location like below (0.json)
    // in firebase, you access based on the node name like 0.json when you click the database ie. react-gratlist
    // https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html
    fetch("https://react-gratlist.firebaseio.com/0.json")
      .then(resp => resp.json())
      .then(jsonData => console.log(JSON.stringify(jsonData)));

    // cdm - invoked after the initial rendering
    // https://github.com/dwyfrequency/completeGuideReact/blob/a64bf40850836130ff5c1fd159122c8cabfa163f/burger_builder_start/react-complete-guide/src/containers/BurgerBuilder/BurgerBuilder.jsx AND https://github.com/dwyfrequency/completeGuideReact/blob/a64bf40850836130ff5c1fd159122c8cabfa163f/burger_builder_start/react-complete-guide/src/axios-orders.js
    // axios
    //   .get("https://react-my-burger-jd.firebaseio.com/ingredients.json")
    //   .then(resp => this.setState({ ingredients: resp.data }))
    //   .catch(err => this.setState({ error: true }));
  };

  isDisabled = () => {
    if (this.state.gratListItems.length >= 4) {
      // if the add button is disabled, give it a few seconds before saving to local storage
      this.setTimer();
      return true;
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
      gratListItems: this.state.gratListItems,
      date: new Date().toISOString()
    };
    const prevListObjStored = localStorage.getItem("gratitudeList");
    if (prevListObjStored) {
      const prevList = JSON.parse(prevListObjStored);
      localStorage.setItem(
        "gratitudeList",
        JSON.stringify(prevList.concat(listObj))
      );
    } else {
      // make the gratlistobj an array and save it in LS
      localStorage.setItem("gratitudeList", JSON.stringify([listObj]));
    }
  };

  // save the list then reset state and rerender the component
  setTimer = () => {
    setTimeout(() => {
      this.saveList();
      this.resetState();
    }, 5000);
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
