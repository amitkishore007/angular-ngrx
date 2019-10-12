import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDdPWjA8rPAA4tU2cbVQ2r-ShkkHRVVb6Y",
      authDomain: "angular-http-2cbd6.firebaseapp.com",
      databaseURL: "https://angular-http-2cbd6.firebaseio.com",
      projectId: "angular-http-2cbd6",
      storageBucket: "angular-http-2cbd6.appspot.com",
      messagingSenderId: "628058976715",
      appId: "1:628058976715:web:62b55b3f0def074817c64e"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
