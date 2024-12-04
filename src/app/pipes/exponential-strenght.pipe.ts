import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrenght',
  standalone: true
})
export class ExponentialStrenghtPipe implements PipeTransform {

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }

}
