import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-film5-child',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './film5-child.component.html',
  styleUrl: './film5-child.component.scss'
})
export class Film5ChildComponent {

}
