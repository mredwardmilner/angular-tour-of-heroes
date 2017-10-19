import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void { // Call the service to get heroes inside the Angular ngOnInit() lifecycle hook.
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5)); // Specify 4 heroes (2nd, 3rd, 4th, and 5th) with the Array.slice method.
    }
}