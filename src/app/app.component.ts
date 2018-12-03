import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDUO6J3RmKV0LiupV_H2lFU3DNyzFssg7I',
      authDomain: 'jamies-recipe-app.firebaseapp.com'
    });
  }
}
