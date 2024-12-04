import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  //Exemple de base
  public favoriteColorControl = new FormControl();
  public favoriteColor: string = '';

  //Avec un FormGroup
  public profileForm = new FormGroup({
    firstName: new FormControl('tata', Validators.required),
    lastName: new FormControl('', Validators.required),
  })

  public onSubmit() {
    console.log(this.profileForm.value);
  }

  public updateForm() {
    this.profileForm.patchValue({
      firstName: 'Toto'
    });
    console.log(this.profileForm.value);
  }
}
