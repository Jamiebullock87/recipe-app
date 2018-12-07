import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      'Banging Burgers',
      'My favourite burger recipe',
      'https://www.maxpixel.net/static/photo/640/Burger-Bacon-Bun-Grilled-Food-Snack-Fast-Food-500054.jpg',
      [
        new Ingredient('Beef mince', 500, 'g'),
        new Ingredient('Pork mince', 500, 'g'),
        new Ingredient('Burger buns', 4, 'no')
      ],
      'Test Method'
      ),
    new Recipe('Spaghetti and Meatballs',
      'My version of an italian classic',
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Spaghetti_and_meatballs_1.jpg',
      [
        new Ingredient('Beef mince', 500, 'g'),
        new Ingredient('Pork mince', 500, 'g'),
        new Ingredient('Spaghetti', 100, 'g')
      ],
      'Test Method'
      )
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
