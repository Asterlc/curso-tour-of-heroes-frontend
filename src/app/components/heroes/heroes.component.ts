import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroesList: Hero[] = HEROES;
  selectedHero!: Hero;

  constructor() { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
