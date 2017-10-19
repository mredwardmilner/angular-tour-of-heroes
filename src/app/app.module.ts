// Defines AppModule, the root module that tells Angular how to assemble the application. Right now it declares only the AppComponent. Soon there will be more components to declare.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router'; //Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser.

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([ // The forRoot() method supplies the Router service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, {
                path: 'heroes', //Path: The router matches this route's path to the URL in the browser address bar (heroes).
                component: HeroesComponent, // Component: The component that the router should create when navigating to this route (HeroesComponent).
            }
        ])
    ], // <-- import the FormsModule before binding with [(ngModel)]
    declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent], // In general, the declarations array contains a list of application components, pipes, and directives that belong to the module. A component must be declared in a module before other components can reference it.
    providers: [HeroService], //The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent. The AppComponent, as well as its child components, can use that service to get hero data.
    bootstrap: [AppComponent],
})
export class AppModule { }


