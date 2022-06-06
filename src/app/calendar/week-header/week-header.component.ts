import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.css'],
})
export class WeekHeaderComponent {
  constructor(public route: ActivatedRoute) {}
  @Input()
  week: Array<moment.Moment> | undefined = [];

  @Output()
  onActiveDay = new EventEmitter<moment.Moment>();
}
