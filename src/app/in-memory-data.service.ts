import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Dr Nice'},
      {id: 2, name: 'Narco'},
      {id: 3, name: 'Bombasto'},
      {id: 4, name: 'Celeries'},
      {id: 5, name: 'Magneta'},
      {id: 6, name: 'RubberMan'},
      {id: 7, name: 'Dynama'},
      {id: 8, name: 'Dr IQ'},
      {id: 9, name: 'Magna'},
      {id: 10, name: 'Tornado'},
    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max (...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
