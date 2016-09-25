import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from  './app.component';
// This is the entry for the application.
// This import is necessary to run the app in the browser.
// Importing only the BrowserModule is the absolute minimum to run in the browser.
@NgModule({
  imports : [
    BrowserModule,
    FormsModule
   ],
  declarations : [ AppComponent ],
  bootstrap : [ AppComponent ]
})

export class AppModule { }
