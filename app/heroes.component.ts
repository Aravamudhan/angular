import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
//Every angular app has a component. They are the basic building blocks.
//A component controls a portion of the screen - a viwe - through its template.
//The root component is AppComponent here.
//selector - an element that represents this component.
//template tells how the view should be rendered for the component.
@Component({
    selector: 'super-heroes',
    //1. The template has back ticks instead of quotes with concatenation for multi-line
    //input. This is ES2015 feature.
    //2. By adding ngModel to the input tag, two way data binding is enabled.
    //3. The ngModel directive propagates changes to every other binding of the same name.
    //4. One way data binding is angular binding the data to a HTML element.
    //5. Two way data binding is data change from the UI to a HTML element.
    //6. When hero.name with ngModel is changed, it is reflected through the component.
    //7. Without ngModel, only double curly braces mean, one way data binding.
    //8. *ngFor iterates over the heroes array and stores each value from this array
    // in to the hero variable. The let keyword identifies hero as a variable.
    //9. *ngIf directive removes the html element, if there is no data in the
    //selectedHero. Any other variable can be checked in this way. This is called
    //structural directive. It can change the structure of portions of DOM.
    template: `<ul class = heroes>
                 <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
                   [class.selected]="hero === selectedHero">
                   <span class="badge">{{hero.id}}</span>{{hero.name}}
                 </li>
               </ul>
               <hero-details [hero]="selectedHero"></hero-details>`,
    styles: [`
             .selected {
               background-color: #CFD8DC !important;
               color: white;
             }
             .heroes {
               margin: 0 0 2em 0;
               list-style-type: none;
               padding: 0;
               width: 15em;
             }
             .heroes li {
               cursor: pointer;
               position: relative;
               left: 0;
               background-color: #EEE;
               margin: .5em;
               padding: .3em 0;
               height: 1.6em;
               border-radius: 4px;
             }
             .heroes li.selected:hover {
               background-color: #BBD8DC !important;
               color: white;
             }
             .heroes li:hover {
               color: #607D8B;
               background-color: #DDD;
               left: .1em;
             }
             .heroes .text {
               position: relative;
               top: -3px;
             }
             .heroes .badge {
               display: inline-block;
               font-size: small;
               color: white;
               padding: 0.8em 0.7em 0 0.7em;
               background-color: #607D8B;
               line-height: 1em;
               position: relative;
               left: -1px;
               top: -4px;
               height: 1.8em;
               margin-right: .8em;
               border-radius: 4px 0 0 4px;
             }
           `]
  //This is registering for dependency injection.
  //This tells angular to create a HeroService when AppComponent is created.
})
//The export keyword is necessary, so that it can be imported in the app that is created.
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero : Hero;

  constructor(private heroService : HeroService){}

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes =heroes);
  }
  //This is a lifecylce hook. This gets called when AppComponent is initialized.
  ngOnInit(): void{
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }
}
