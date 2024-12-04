import { Routes } from '@angular/router';
import {RouteComponent} from "./route/route.component";
import {TotoComponent} from "./toto/toto.component";
import {RouteChildComponent} from "./route/route-child/route-child.component";
import {FormComponent} from "./form/form.component";

export const routes: Routes = [
    {
        path: 'route',
        component: RouteComponent,
        children: [
            { path: 'route-child', component: RouteChildComponent },
        ]
    },
    { path: 'form', component: FormComponent },
    { path: 'toto', component: TotoComponent },
    { path: '', redirectTo: 'route', pathMatch: 'full'}, // redirige vers l'url app les url vide
    { path: '**', component: RouteComponent} // redirige vers RouteComponent les url qui ne sont pas définis ici
];
