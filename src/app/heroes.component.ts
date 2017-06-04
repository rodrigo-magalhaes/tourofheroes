import { Component, OnInit } from '@angular/core';

import { Hero } from "app/hero";
import { HeroService } from "app/hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

    ngOnInit(): void {
      this.getHeroes();
    }

  getHeroes(): void {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlow().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
