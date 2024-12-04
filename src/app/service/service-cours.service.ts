import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCoursService {

  constructor() { }

  public variableDuService: string = 'Je suis la variable du service';
}
