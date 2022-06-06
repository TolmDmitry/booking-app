import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.css'],
})
export class WeekSelectorComponent {
  @Input()
  indexWeek: number = 0;

  @Input()
  weekInfo = {
    weekStartDate: '',
    weekEndDate: '',
    currentMonthName: '',
  };

  @Output()
  prevMonth = new EventEmitter<void>();

  @Output()
  nextMonth = new EventEmitter<void>();
}
