import { Component, OnInit } from '@angular/core';
import {FormDataService} from "../contact/contact-data.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent implements OnInit{
  public formData: any = null;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formDataService.formData$.subscribe((data: any) => {
      this.formData = data;
    });
  }
}
