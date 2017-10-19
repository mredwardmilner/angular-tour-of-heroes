import { Component, Input } from '@angular/core'; //This "Compenent" (and "Input") is what is called a "symbol"
import { Hero } from './hero';

@Component({ //This @Compenent is what is called a "decorator"
    selector: 'hero-detail', // CSS Selector, the tag name of the element that represents the HeroDetailComponent.
    template: `
    <div *ngIf="hero">
    <h2>{{hero.name}} details</h2>
    <div><label>ID:</label> {{hero.id}}</div>
    <div><label>Name:</label>
    <input type="text" [(ngModel)]="hero.name" placeholder="name" />
    </div>
    </div>`
})

export class HeroDetailComponent {
    // A component class name should be written in upper camel case and end in the word "Component".
    // Always export the component class because you'll always import it elsewhere.
    @Input() hero: Hero; //@Input declares that hero is an input
}
