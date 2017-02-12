import { Component } from '@angular/core';
@Component({
  selector: 'hero-app',
  template: `<h1>{{title}}</h1>
             <super-heroes></super-heroes>`
})
export class AppComponent{
  title = 'The Super hero league';
}
