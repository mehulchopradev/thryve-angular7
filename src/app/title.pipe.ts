import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(val: string): string {
    if (val.length > 0) {
      return `${val[0].toUpperCase()}${val.substring(1).toLowerCase()}`;
    }

    return val;
  }

}
