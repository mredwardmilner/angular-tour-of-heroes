//	Defines the same AppComponent as the one in the QuickStart playground. It is the root component of what will become a tree of nested components as the application evolves.

// https://angular.io/tutorial/

import { Component } from '@angular/core';
//import { OnInit } from '@angular/core'; // WHY ISN'T THIS IMPORTED?
import { Hero } from './hero';
import { HeroService } from './hero.service';

//The Angular style guide recommends one class per file


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    // Can this be in markup instead? Attribute binding?
    // Backticks '`' allow you to do multi-line (key above tab key)

    // The (*) prefix to ngFor is a critical part of this syntax. It indicates that the <li> element and its children constitute a master template.
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    // Why are styles here and not in CSS?
    providers: [HeroService] //The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent. The AppComponent, as well as its child components, can use that service to get hero data.
})

// Use the ngOnInit lifecycle hook to get the hero data when the AppComponent activates.
export class AppComponent implements OnInit { // WHY LEAVE ONINIT ERRORING? 
    // name = 'Angular';
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero; // Is this not an equals because it's not referring to a string or array?

    constructor(private heroService: HeroService) { }; // Constructor that defines a private property

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes); // The ES2015 arrow function (=>) in the callback is more succinct than the equivalent function expression and gracefully handles 'this'.
    };

    ngOnInit(): void { //ngOnInit lifecycle hook. Angular offers interfaces for tapping into critical moments in the component lifecycle: at creation, after each change, and at its eventual destruction.
      this.getHeroes(); // Run getHeroes above on start
    };

    onSelect(hero: Hero): void { // the selected hero resolves to hero
        this.selectedHero = hero;
    };
}



