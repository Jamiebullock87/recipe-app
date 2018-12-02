import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {}

  onStoreRecipes() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  onFetchRecipes() {
    this.dataStorageService.fetchRecipes();
  }
}


// onGet() {
//   this.serverService.getServers()
//     .subscribe(
//       (servers: any[]) => this.servers = servers,
//       (error) => console.log(error)
//     );
// }