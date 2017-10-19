// The Routing Module pulls the routes into a variable. The variable clarifies the routing module pattern in case you export the module in the future.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule], // Add so that the components in the companion app.module.ts have access to Router declarables, such as RouterLink and RouterOutlet.

    // If you have guard services, the Routing Module adds module providers. (There are none in this example.)
})
export class AppRoutingModule { }


/* RouterModule.forRoot([ // The forRoot() method supplies the Router service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
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
    },
    {
        path: 'detail/:id', //The colon in the path indicates that :id is a placeholder for a specific hero id when navigating to the HeroDetailComponent
        // This isn't a fixed path, it's binding to an expression containing a link parameters array. The array has two elements: the path of the destination route and a route parameter set to the value of the current hero's id.
        component: HeroDetailComponent,
    },
]) */