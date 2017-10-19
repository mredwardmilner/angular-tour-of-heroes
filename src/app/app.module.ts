// Defines AppModule, the root module that tells Angular how to assemble the application. Right now it declares only the AppComponent. Soon there will be more components to declare.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule], // <-- import the FormsModule before binding with [(ngModel)]
    declarations: [AppComponent, HeroDetailComponent], // In general, the declarations array contains a list of application components, pipes, and directives that belong to the module. A component must be declared in a module before other components can reference it.
    bootstrap: [AppComponent]
})
export class AppModule { }
