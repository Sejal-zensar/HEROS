import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heros/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id:22, name: 'Tamal'},
      {id:21, name: 'Shruti'},
      {id:12, name: 'Prudhvi'},
      {id:32, name: 'Navrang'},
      {id:2, name: 'Badsha'},
      {id:3, name: 'Sejal'},
      {id:4, name: 'Raghu'},
      {id:5, name: 'Avinash'},
      {id:20, name: 'Kiara'},
      {id:7, name: 'Tammanah'},
      {id:25, name: 'Sarika'},
      {id:10, name: 'Bhavna'},
      {id:8, name: 'Kalia'},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}