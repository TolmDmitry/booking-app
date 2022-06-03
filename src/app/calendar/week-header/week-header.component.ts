import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.css'],
})
export class WeekHeaderComponent {
  @Input()
  week: Array<moment.Moment> | undefined = [];

  @Output()
  onActiveDay = new EventEmitter<moment.Moment>();
}
