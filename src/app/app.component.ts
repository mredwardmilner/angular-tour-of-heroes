//	Defines the same AppComponent as the one in the QuickStart playground. It is the root component of what will become a tree of nested components as the application evolves.

// The AppComponent should only handle navigation, so you'll move the display of components out of AppComponent and into their own xxxxComponent files.

// https://angular.io/tutorial/

import { Component } from '@angular/core';

//The Angular style guide recommends one class per file


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
    </nav>
   <router-outlet></router-outlet> 
   ` //RouterOutlet is one of the directives provided by the RouterModule. The router displays each component immediately below the <router-outlet> as users navigate through the app.
})

export class AppComponent {
    // name = 'Angular';
    title = 'Tour of Heroes';
}



