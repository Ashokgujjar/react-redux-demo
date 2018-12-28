import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
// import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
