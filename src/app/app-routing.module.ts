import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  // Each route mentioned here, each one will be a js object
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  // { path: 'not-found', component: ErrorPageComponent },
  // { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})  use this if webserver cannot parse angular urls
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
