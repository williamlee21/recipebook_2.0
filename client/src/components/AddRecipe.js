import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewRecipe } from "../store";

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "aa",
      ingredients: "bb",
      directions: "cc"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
  }

  handleSubmit(event) {
    let name = this.state.name;
    let ingredients = this.state.ingredients;
    let directions = this.state.directions;
    this.props.addRecipe(name, ingredients, directions);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleIngredientsChange(event) {
    this.setState({ ingredients: event.target.value });
  }

  handleDirectionsChange(event) {
    this.setState({ directions: event.target.value });
  }

  render() {
    // const {addRecipe} = this.props

    return (
      <div>
        <h1>Add Recipe</h1>
        <form>
          <label>Recipe Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <label>ingredients</label>
          <textarea
            value={this.state.ingredients}
            onChange={this.handleIngredientsChange}
          />
          <label>Directions</label>
          <textarea
            value={this.state.directions}
            onChange={this.handleDirectionsChange}
          />
          <button onClick={this.handleSubmit}>Add New Recipe</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRecipe: (name, ingredients, directions) => {
      dispatch(addNewRecipe(name, ingredients, directions));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddRecipe);
