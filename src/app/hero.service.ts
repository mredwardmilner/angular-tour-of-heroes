// The naming convention for service files is the service name in lowercase followed by .service. For a multi-word service name, use lower dash-case.

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


// The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
@Injectable() // This is a function. Don't forget the parentheses. Omitting them leads to an error that's difficult to diagnose.


export class HeroService {
    // A Promise essentially promises to call back when the results are ready. You ask an asynchronous service to call the function with the results or an error.
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }; // This is called a stub
    getHeroesSlowly(): Promise<Hero[]> { // Simulate slow connection
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
      };
}
