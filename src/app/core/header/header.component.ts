import { Component } from '@angular/core';
// import { Response } from '@angular/http';
// import { HttpEvent } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) {}

  onStoreRecipes() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response/* : HttpEvent<Object> Response */) => {
          console.log(response);
        }
      );
  }
  onFetchRecipes() {
    this.dataStorageService.fetchRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
