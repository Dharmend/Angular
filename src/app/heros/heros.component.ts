import { Component, OnInit } from '@angular/core';
//import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  employee_list = [];
  public hero_after_click:Hero;
  public emp;

  constructor(private hero_var:HeroService) { }

  ngOnInit() {
  console.log(this.hero_var.getherodata());
  this.employee_list = this.hero_var.getherodata();
  }
  saveme(emp:Hero){
    this.hero_after_click = emp;
    //We get the value of single employee when click and assign this value to the hero_after_click variable
  }
}
