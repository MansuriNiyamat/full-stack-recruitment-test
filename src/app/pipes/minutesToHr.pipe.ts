import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'm2h'
})
export class MinutesToHours implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return '' + hours + ' hrs ' + minutes + ' mins';
  }
}
