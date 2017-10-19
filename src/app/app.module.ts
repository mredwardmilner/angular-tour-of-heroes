// Defines AppModule, the root module that tells Angular how to assemble the application. It establishes key facts about the entire app for the Angular compiler.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// import { RouterModule } from '@angular/router'; //Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser.

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ], // <-- import the FormsModule before binding with [(ngModel)]
    declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent], // In general, the declarations array contains a list of application components, pipes, and directives that belong to the module. A component must be declared in a module before other components can reference it.
    providers: [HeroService], //The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent. The AppComponent, as well as its child components, can use that service to get hero data.
    bootstrap: [AppComponent],
})
export class AppModule { }


