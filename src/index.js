import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/*
GratList app structure

App
	- GratHeader
	- GratListContainer
    - GratListItem #1
		- GratListItem #2
		  ...
		- GratListItem #N
	- GratForm
*/

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
