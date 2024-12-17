import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {FormDataService} from "./contact-data.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService) {

    this.contactForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      age: [''],
      hideEmail: [false],
      email: ['',[Validators.required, Validators.email]],
      comment: ['',Validators.required],
    });
}

  toggleEmailValidation() {
    const emailControl = this.contactForm.get('email');
    const hideEmail = this.contactForm.get('hideEmail')?.value;

    if (hideEmail) {
      emailControl?.clearValidators();
    } else {
      emailControl?.setValidators([Validators.required, Validators.email]);
    }
    emailControl?.updateValueAndValidity(); // Met à jour la validation
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formDataService.setFormData(this.contactForm.value);

      alert('Le formulaire est valide');
      this.router.navigate(['/']);
    }
  }
}
