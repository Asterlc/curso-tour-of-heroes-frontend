import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero.model';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
 @Input('hero') hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
