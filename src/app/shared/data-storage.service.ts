import { Injectable } from '@angular/core';
import { HttpClient, /* HttpHeaders, */ HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://jamies-recipe-app.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {
        observe: 'body',
        // headers: new HttpHeaders().set('Authorisation', 'Bearer API KEY HERE')
        params: new HttpParams().set('auth', token)
      });
  }
  fetchRecipes() {
    const token = this.authService.getToken();
    return this.http.get<Recipe[]>('https://jamies-recipe-app.firebaseio.com/recipes.json', {
      params: new HttpParams().set('auth', token)
    })
      .pipe(map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
