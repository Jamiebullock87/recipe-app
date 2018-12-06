import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDUO6J3RmKV0LiupV_H2lFU3DNyzFssg7I',
      authDomain: 'jamies-recipe-app.firebaseapp.com'
    });
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
