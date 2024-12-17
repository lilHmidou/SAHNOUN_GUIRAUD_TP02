import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-film3-child',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './film3-child.component.html',
  styleUrl: './film3-child.component.scss'
})
export class Film3ChildComponent {

}
