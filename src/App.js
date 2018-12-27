import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
// import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  // componentDidMount = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => {
  //       this.setState({ posts: response.data });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

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
