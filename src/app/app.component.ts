//	Defines the same AppComponent as the one in the QuickStart playground. It is the root component of what will become a tree of nested components as the application evolves.

// https://angular.io/tutorial/

import { Component } from '@angular/core';
import { Hero } from './hero';

//The Angular style guide recommends one class per file


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <h2>My heroes</h2>
    <ul class="heroes">
    <li *ngFor="let hero of heroes"  (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
    <span class="badge">{{hero.id}}</span> {{hero.name}}</li>
    </ul>`,
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
  `]
    // Why are styles here and not in CSS?
})

export class AppComponent {
    // name = 'Angular';
    title = 'Tour of Heroes';
    selectedHero: Hero; // Is this not an equals because it's not referring to a string or array?
    onSelect(hero: Hero): void { // the selected hero resolves to hero
        this.selectedHero = hero;
    };
    heroes = HEROES;
}

const HEROES: Hero[] = [ // All caps is a naming convention for consts
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

