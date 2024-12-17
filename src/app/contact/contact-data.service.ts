import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  comment: string;
}

@Injectable({
  providedIn: 'root',
})

export class FormDataService {
  private formDataSubject = new BehaviorSubject<FormData | null>(null);
  formData$ = this.formDataSubject.asObservable();

  constructor() {}

  setFormData(formData: FormData) {
    this.formDataSubject.next(formData);
  }
}
