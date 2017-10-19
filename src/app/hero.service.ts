// The naming convention for service files is the service name in lowercase followed by .service. For a multi-word service name, use lower dash-case.

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// There are many operators like toPromise that extend Observable with useful capabilities. To use those capabilities, you have to add the operators themselves. That's as easy as importing them from the RxJS library like this:
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


// The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
@Injectable() // This is a function. Don't forget the parentheses. Omitting them leads to an error that's difficult to diagnose.


export class HeroService {
    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(private http: Http) { }

    // A Promise essentially promises to call back when the results are ready. You ask an asynchronous service to call the function with the results or an error.

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Hero) //The data in the response is a single hero object rather than an array.
          .catch(this.handleError);
    };

    // The data should successfully load from the mock server.

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            // The Angular http.get returns an RxJS Observable. Observables are a powerful way to manage asynchronous data flows.
            .toPromise()
            .then(response => response.json().data as Hero[])
            // The Promise's then() callback, you call the json method of the HTTP Response to extract the data within the response.
            // The response JSON has a single data property, which holds the array of heroes that the caller wants. So you grab that array and return it as the resolved Promise value.
            .catch(this.handleError);
    }; // This is called a stub

    // You must anticipate HTTP failures, as they happen frequently for reasons beyond your control.
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
        // The code includes an error to the caller in a rejected promise, so that the caller can display a proper error message to the user.
    }

    getHeroesSlowly(): Promise<Hero[]> { // Simulate slow connection
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    };
}
