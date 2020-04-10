import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";

class App extends Component {
  state = { message: "hello world" };
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
