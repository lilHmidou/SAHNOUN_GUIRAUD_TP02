import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {

}
