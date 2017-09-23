import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeUpper'
})
export class MakeUpperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
