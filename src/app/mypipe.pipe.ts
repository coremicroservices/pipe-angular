import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value) {
     return value.charAt(0).toUpperCase() + value.substring(1, value.length);
  }
  }
}
