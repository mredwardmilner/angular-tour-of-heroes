import { Component, Input, OnInit } from '@angular/core'; //This "Compenent" (and "Input") is what is called a "symbol"
import { Hero } from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap'; // Import the switchMap operator to use later with the route parameters Observable.

@Component({ //This @Compenent is what is called a "decorator"
    selector: 'hero-detail', // CSS Selector, the tag name of the element that represents the HeroDetailComponent.
    templateUrl: './hero-detail.component.html'

})

export class HeroDetailComponent implements OnInit {
    // A component class name should be written in upper camel case and end in the word "Component".
    // Always export the component class because you'll always import it elsewhere.
    @Input() hero: Hero; //@Input declares that hero is an input
    constructor( //Inject the ActivatedRoute, HeroService, and Location services into the constructor, saving their values in private fields
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { };
    ngOnInit(): void {
        this.route.paramMap
            // The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            // The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
            .subscribe(hero => this.hero = hero);
        // paramMap Observable to extract the id parameter value from the ActivatedRoute service and use the HeroService to fetch the hero with that id.
    }
    goBack(): void {
        this.location.back();
    }
}