import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  getherodata(){
  return [
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
  }
}
/* Services is a class with specific Purpose
  Why :
*  Share the data in multiple components by services,
*  Implement Application logic let's suppose user enter the dob and we need to calculate the age,
*  For External interation like creating db we use services,
How :
  1 - Create a service by cmd : ng generate service employee(servicename)
  2 - Register with injector like add it in app module's provider array , include as well,
  3 - Declare the dependency in consuctor who would use the services , like heros & herodetail component
*/
