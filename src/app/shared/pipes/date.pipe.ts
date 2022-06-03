import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'datePipe',
})
export class DatePipe implements PipeTransform {
  transform(value: moment.Moment | undefined, args: string): string {
    if (!value) {
      return '';
    }
    return moment(value).format(args);
  }
}
