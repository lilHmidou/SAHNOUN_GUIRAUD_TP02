import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TotoComponent} from "./toto/toto.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TotoComponent, NgIf, NgForOf, NgClass, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public list: string[] = ['1', '2', '3'];
  public color: string = 'red';

  public updateColor(colorOutPut: any) {
    this.color = colorOutPut;
  }
}
