import { Routes } from '@angular/router';
import {RouteComponent} from "./route/route.component";
import {FormComponent} from "./form/form.component";
import {ContactComponent} from "./contact/contact.component";
import {ListeComponent} from "./liste/liste.component";
import {Film1ChildComponent} from "./liste/film1-child/film1-child.component";
import {Film2ChildComponent} from "./liste/film2-child/film2-child.component";
import {Film3ChildComponent} from "./liste/film3-child/film3-child.component";
import {Film4ChildComponent} from "./liste/film4-child/film4-child.component";
import {Film5ChildComponent} from "./liste/film5-child/film5-child.component";
import {ManageComponent} from "./manage/manage.component";

export const routes: Routes = [
    {
        path: 'list',
        component: ListeComponent,
        children: [
            { path: 'film1-child', component: Film1ChildComponent },
          { path: 'film2-child', component: Film2ChildComponent },
          { path: 'film3-child', component: Film3ChildComponent },
          { path: 'film4-child', component: Film4ChildComponent },
          { path: 'film5-child', component: Film5ChildComponent }
        ]
    },
    { path: 'form', component: FormComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'manage', component: ManageComponent },
    { path: 'list', component: ListeComponent},
    { path: '', redirectTo: 'route', pathMatch: 'full'}, // redirige vers l'url app les url vide
    { path: '**', component: RouteComponent} // redirige vers RouteComponent les url qui ne sont pas définis ici
];
