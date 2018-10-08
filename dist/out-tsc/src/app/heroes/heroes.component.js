var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
/** What We Learn
** We can define templateurl or temple (for inline html only) ,
** Add Multiline Inline HTML or CSS by backticks (``) ,
** Selector Can be Added by app-heroes, .app-heroes , [app-heroes] ,
*/
/** Interpolation
** We can concatenate the string and value just like js with + ,
** We can use the javascript Properties/functions as well as Component class Properties/functions with in templates ,
** Template is not aware of global js variables or functions
*/
/** HTML Attributes Vs Properties
** Attributes: html ,
** Properties: DOM(Document Object Model)
** Attributes Initialize the DOM Properties that is done, Attribute value can not changes when once they are Initialize
**
*/
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.hero = {
            id: 1,
            name: 'Naman Rajput'
            //Basics of Angular 6
        };
        this.my_title = 'Test Title By Dev Team';
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = __decorate([
        Component({
            selector: 'app-heroes',
            template: "\n  <div>Namskar</div>\n  <h2>{{my_title}}</h2>\n  <h3>{{\"Welcome \"+ my_title}}</h3>\n  <h2>{{2+3}}</h2>\n  <h4>{{my_title.length}}</h4>\n  ",
            styleUrls: ['./heroes.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map