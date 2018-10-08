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
import { TestHerosService } from '../test-heros.service';
var TestHerosComponent = /** @class */ (function () {
    //Here TestHerosServices is the local variable name which is accessible after creating the object , While TestHerosService
    //is the class name of the services.
    function TestHerosComponent(testHeroService) {
        this.testHeroService = testHeroService;
        this.message = "Welcome to the World Of Angular";
    }
    TestHerosComponent.prototype.getHeroes = function () {
        var _this = this;
        this.testHeroService.getHeroes()
            .subscribe(function (data) { return _this.heroes = data; }, function (error) { return _this.errormsg = error; });
    };
    TestHerosComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    TestHerosComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    TestHerosComponent = __decorate([
        Component({
            selector: 'app-test-heros',
            templateUrl: './test-heros.component.html',
            styleUrls: ['./test-heros.component.css']
        }),
        __metadata("design:paramtypes", [TestHerosService])
    ], TestHerosComponent);
    return TestHerosComponent;
}());
export { TestHerosComponent };
//# sourceMappingURL=test-heros.component.js.map