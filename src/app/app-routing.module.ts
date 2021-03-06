// The Routing Module pulls the routes into a variable. The variable clarifies the routing module pattern in case you export the module in the future.

//Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', 
     //The colon in the path indicates that :id is a placeholder for a specific hero id when navigating to the HeroDetailComponent
        // This isn't a fixed path, it's binding to an expression containing a link parameters array. The array has two elements: the path of the destination route and a route parameter set to the value of the current hero's id.
    component: HeroDetailComponent },
    { path: 'heroes',  //Path: The router matches this route's path to the URL in the browser address bar (heroes).
    component: HeroesComponent 
 // Component: The component that the router should create when navigating to this route (HeroesComponent).
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule], // Add so that the components in the companion app.module.ts have access to Router declarables, such as RouterLink and RouterOutlet.

    // If you have guard services, the Routing Module adds module providers. (There are none in this example.)
})

export class AppRoutingModule { }

