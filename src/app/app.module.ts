import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

const config = {
    apiKey: "AIzaSyBNHTZztQh5fXjbvA0P1aCcD0dGc5z7-es",
    authDomain: "gordon-392f2.firebaseapp.com",
    databaseURL: "https://gordon-392f2.firebaseio.com",
    projectId: "gordon-392f2",
    storageBucket: "gordon-392f2.appspot.com",
    messagingSenderId: "935091986574"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
