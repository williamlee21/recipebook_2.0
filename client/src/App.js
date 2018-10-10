import React, { Component } from "react";
import "./App.css";
import { AllRecipes, AddRecipe } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllRecipes />
        <AddRecipe />
      </div>
    );
  }
}

export default App;
