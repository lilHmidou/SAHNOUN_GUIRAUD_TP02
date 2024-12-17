import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-film1-child',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive, RouterOutlet],
  templateUrl: './film1-child.component.html',
  styleUrl: './film1-child.component.scss'
})
export class Film1ChildComponent {

}
