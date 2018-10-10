import axios from "axios";

// Action Type
const GOT_RECIPES_FROM_SERVER = "GOT_RECIPES_FROM_SERVER";
// const DELETE_RECIPE = "DELETE_RECIPE";

// Action Creator
const gotRecipeFromServer = recipes => ({
  type: GOT_RECIPES_FROM_SERVER,
  recipes
});

// Thunk Creators
export function getRecipeFromServer() {
  return dispatch => {
    axios
      .get("/api/recipes")
      .then(res => dispatch(gotRecipeFromServer(res.data)));
    // .then(console.log("...recipes loaded"))
    // .catch(console.error);
  };
}

export function addNewRecipe(name, ingredients, directions) {
  return function(dispatch) {
    axios
      .post("/api/add", { name, ingredients, directions })
      // .then(() => {
      //   dispatch(getRecipeFromServer())
      // })
      .catch(console.error);
  };
}

export function removeRecipe(recipeId) {
  return function(dispatch) {
    axios
      .delete(`/api/delete/${recipeId}`)
      .then(dispatch(getRecipeFromServer()))
      .catch(console.error);
  };
}

// Reducer
export default function(initialState = [], action) {
  switch (action.type) {
    case GOT_RECIPES_FROM_SERVER:
      return action.recipes;
    default:
      return initialState;
  }
}
