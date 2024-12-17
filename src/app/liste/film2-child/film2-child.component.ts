import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-film2-child',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './film2-child.component.html',
  styleUrl: './film2-child.component.scss'
})
export class Film2ChildComponent {

}
