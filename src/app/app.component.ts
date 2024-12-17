import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, NgClass, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
