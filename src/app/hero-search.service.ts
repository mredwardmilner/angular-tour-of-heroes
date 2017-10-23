import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`api/heroes/?name=${term}`) // Similar to the one in the HeroService, although the URL now has a query string
            .map(response => response.json().data as Hero[]); // No longer using .toPromise(), instead the RxJS operator, map(). This extracts heroes from the response data
    }
}