"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
//Every angular app has a component. They are the basic building blocks.
//A component controls a portion of the screen - a viwe - through its template.
//The root component is AppComponent here.
//selector - an element that represents this component.
//template tells how the view should be rendered for the component.
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heros';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
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
            template: "<h1>{{title}}</h1>\n               <h2>My Heroes</h2>\n               <ul class = heroes>\n                 <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\"\n                   [class.selected]=\"hero === selectedHero\">\n                   <span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n                 </li>\n               </ul>\n               <div *ngIf=\"selectedHero\">\n                 <h2>{{selectedHero.name}} details!</h2>\n                 <div><label>Id: </label>{{selectedHero.id}}</div>\n                 <div>\n                   <label>Name: </label>\n                   <input [(ngModel)] = \"selectedHero.name\" placeholder=\"name\"/>\n                 </div>\n               </div>",
            styles: ["\n             .selected {\n               background-color: #CFD8DC !important;\n               color: white;\n             }\n             .heroes {\n               margin: 0 0 2em 0;\n               list-style-type: none;\n               padding: 0;\n               width: 15em;\n             }\n             .heroes li {\n               cursor: pointer;\n               position: relative;\n               left: 0;\n               background-color: #EEE;\n               margin: .5em;\n               padding: .3em 0;\n               height: 1.6em;\n               border-radius: 4px;\n             }\n             .heroes li.selected:hover {\n               background-color: #BBD8DC !important;\n               color: white;\n             }\n             .heroes li:hover {\n               color: #607D8B;\n               background-color: #DDD;\n               left: .1em;\n             }\n             .heroes .text {\n               position: relative;\n               top: -3px;\n             }\n             .heroes .badge {\n               display: inline-block;\n               font-size: small;\n               color: white;\n               padding: 0.8em 0.7em 0 0.7em;\n               background-color: #607D8B;\n               line-height: 1em;\n               position: relative;\n               left: -1px;\n               top: -4px;\n               height: 1.8em;\n               margin-right: .8em;\n               border-radius: 4px 0 0 4px;\n             }\n           "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map