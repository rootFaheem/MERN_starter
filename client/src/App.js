import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  login = () => {
    const data = {
      name: "abc",
      age: 32
    };

    axios
      .post("/user/", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <div>
          <button onClick={this.login}>click me</button>
        </div>
      </div>
    );
  }
}

export default App;
