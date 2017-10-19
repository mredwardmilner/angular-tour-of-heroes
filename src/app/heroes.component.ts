
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'] // SQUARE BRACKETS BECAUSE ARRAY?
    // Backticks '`' allow you to do multi-line (key above tab key on keyboard)
})

// Use the ngOnInit lifecycle hook to get the hero data when the AppComponent activates.
export class HeroesComponent implements OnInit {
    heroes: Hero[]; // Define a heroes array property
    selectedHero: Hero; // Is this not an equals because it's not referring to a string or array?

    constructor(
        private router: Router,
        private heroService: HeroService) { }; // Constructor that defines a private property

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes); // The ES2015 arrow function (=>) in the callback is more succinct than the equivalent function expression and gracefully handles 'this'.
    };

    ngOnInit(): void { //ngOnInit lifecycle hook. Angular offers interfaces for tapping into critical moments in the component lifecycle: at creation, after each change, and at its eventual destruction.
        this.getHeroes(); // Run getHeroes above on start
    };

    onSelect(hero: Hero): void { // the selected hero resolves to hero
        this.selectedHero = hero;
    };

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]); // Pass a two-element link parameters array—a path and the route parameter—to the router navigate() method
      };

}



