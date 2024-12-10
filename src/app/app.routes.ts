import { Routes } from '@angular/router';
import {RouteComponent} from "./route/route.component";
import {TotoComponent} from "./toto/toto.component";
import {RouteChildComponent} from "./route/route-child/route-child.component";
import {FormComponent} from "./form/form.component";
import {ContactComponent} from "./contact/contact.component";
import {ListeComponent} from "./liste/liste.component";
import {Film1Component} from "./liste/film1/film1.component";

export const routes: Routes = [
    {
        path: 'list',
        component: ListeComponent,
        children: [
            { path: 'film1-child', component: Film1Component },
        ]
    },
    { path: 'form', component: FormComponent },
    { path: 'toto', component: TotoComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'list', component: ListeComponent},
    { path: '', redirectTo: 'route', pathMatch: 'full'}, // redirige vers l'url app les url vide
    { path: '**', component: RouteComponent} // redirige vers RouteComponent les url qui ne sont pas définis ici
];
