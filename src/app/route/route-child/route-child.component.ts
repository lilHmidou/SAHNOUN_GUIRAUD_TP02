import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-route-child',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './route-child.component.html',
  styleUrl: './route-child.component.scss'
})
export class RouteChildComponent {

}
