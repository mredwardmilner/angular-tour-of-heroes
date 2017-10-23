// Defines AppModule, the root module that tells Angular how to assemble the application. It establishes key facts about the entire app for the Angular compiler.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http'; // HttpModule holds providers for a complete set of HTTP services.

import { AppRoutingModule } from './app-routing.module';
 
// Imports for loading & configuring the in-memory web API. Until you have a web server that can handle requests for hero data, the HTTP client will fetch and save data from a mock service, the in-memory web API.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

// All these imports are called metadata

@NgModule({
    imports: [ // Import modules to allow access from anywhere in the app
        BrowserModule,
        FormsModule,
        HttpModule,
        // Rather than require a real API server, this example simulates communication with the remote server by adding the InMemoryWebApiModule to the module imports, effectively replacing the Http client's XHR backend service with an in-memory alternative.
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        // The forRoot() configuration method takes an InMemoryDataService class that primes the in-memory database. 
        AppRoutingModule,
    ],
    declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent], // In general, the declarations array contains a list of application components, pipes, and directives that belong to the module. A component must be declared in a module before other components can reference it.
    providers: [HeroService], //The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent. The AppComponent, as well as its child components, can use that service to get hero data.
    bootstrap: [AppComponent],
})
export class AppModule { }


