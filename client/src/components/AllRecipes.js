import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecipeFromServer, removeRecipe } from "../store";

class AllRecipes extends Component {
  constructor() {
    super();
    this.state = {
      idIsClicked: ""
    };
  }

  componentDidMount() {
    this.props.loadRecipes();
  }

  render() {
    let recipes = this.props.recipes;
    console.log(recipes);
    return (
      <div>
        <h1>Simple Recipes</h1>
        <h2>Recipebook 2.0</h2>
        {recipes.map(recipe => {
          return (
            <div key={recipe.id}>
              {/* this.setState({editIsClicked: [...this.state.editIsClicked, {id: false}]}) */}
              <h3>{recipe.name}</h3>
              <h4>{recipe.ingredients}</h4>
              <h4>{recipe.directions}</h4>
              <button
                onClick={() =>
                  this.state.idIsClicked === ""
                    ? this.setState({ idIsClicked: recipe.id })
                    : this.setState({ idIsClicked: "" })
                }
              >
                Edit
              </button>
              <button onClick={() => this.props.deleteRecipe(recipe.id)}>
                Delete
              </button>
              {this.state.idIsClicked === recipe.id
                ? "Hi! This is textarea!"
                : ""}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipes: state.recipes };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("...dispatch");
  return {
    loadRecipes: () => dispatch(getRecipeFromServer()),
    deleteRecipe: recipeId => dispatch(removeRecipe(recipeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRecipes);
