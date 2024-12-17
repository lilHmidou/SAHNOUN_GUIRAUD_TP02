import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-film4-child',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './film4-child.component.html',
  styleUrl: './film4-child.component.scss'
})
export class Film4ChildComponent {

}
