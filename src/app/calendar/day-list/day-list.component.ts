import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Room } from 'src/app/calendar.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css'],
})
export class DayListComponent {
  @Input()
  rooms: Room[] = [];

  @Output()
  onRoomOpen = new EventEmitter<number>();

  @Output()
  onOpenDialog = new EventEmitter<any>();

  @Output() onDeleteBooking = new EventEmitter<any>();

  public deleteBooking(date: moment.Moment, user: string, room: number) {
    this.onDeleteBooking.emit({ date, user, room });
  }

  public openDialog(currentDay: any, currentRoom: any, currentPlace: any) {
    this.onOpenDialog.emit({ currentDay, currentRoom, currentPlace });
  }
}
