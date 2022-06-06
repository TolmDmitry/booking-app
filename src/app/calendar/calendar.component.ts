import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookedPlace, BookingService } from '../booking.service';
import { CalendarService, Room } from '../calendar.service';
import { ModalComponent } from '../modal/modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  indexWeek: number = moment().week();
  weekInfo = {
    weekStartDate: '',
    weekEndDate: '',
    currentMonthName: '',
  };

  bookedPlaces: BookedPlace[] | undefined = [];

  rooms: Room[] = [];

  weeks: Array<{
    week: number;
    days: moment.Moment[];
    monthName: string;
  }> = [];

  week: Array<moment.Moment> | undefined = [];

  constructor(
    public modal: MatDialog,
    public calendarService: CalendarService,
    public bookingService: BookingService
  ) {}

  public onOpenDialog(event: any) {
    this.modal.open(ModalComponent, {
      data: {
        currentDay: event.currentDay,
        currentRoom: event.currentRoom,
        currentPlace: event.currentPlace,
      },
    });
  }

  public onActiveDay(day: moment.Moment) {
    this.bookingService.rooms[0].bookedPlaces.find((place) => {
      if (moment(place.date).isSame(day)) {
        place.usersCountHide = place.usersCountHide ? false : true;
      }
    });
  }

  public onRoomOpen(number: number) {
    this.bookingService.rooms.find((room) => {
      if (room.roomNumber === number) {
        room.hide = room.hide ? false : true;
      }
    });
  }

  public onDeleteBooking({
    date,
    user,
    room,
  }: {
    date: moment.Moment;
    user: string;
    room: number;
  }) {
    this.bookingService.deleteBooking({ date, user, room });
  }

  ngOnInit(): void {
    this.weeks = this.calendarService.getWeekDays();
    this.week = this.calendarService.getWeek(this.indexWeek).days;
    this.bookingService.setupWeek(this.week);
    this.getWeekInfo(this.indexWeek);
    this.rooms = this.bookingService.rooms;
  }

  public prevMonth() {
    console.log(this.indexWeek);
    if (this.indexWeek > moment().week()) {
      --this.indexWeek;
      this.week = this.calendarService.getWeek(this.indexWeek).days;
      this.getWeekInfo(this.indexWeek);
      this.bookingService.setupWeek(this.week);
    }
  }

  public nextMonth() {
    if (this.indexWeek < this.weeks[this.weeks.length - 1].week) {
      ++this.indexWeek;
      this.week = this.calendarService.getWeek(this.indexWeek).days;
      this.getWeekInfo(this.indexWeek);
      this.bookingService.setupWeek(this.week);
    }
  }

  public getWeekInfo(indexWeek: number) {
    this.weekInfo = {
      weekStartDate: moment(moment().year())
        .add(indexWeek - 1, 'weeks')
        .startOf('week')
        .format('DD - MMMM'),
      weekEndDate: moment(moment().year())
        .add(indexWeek - 1, 'weeks')
        .endOf('week')
        .format('DD - MMMM'),
      currentMonthName: moment().format('MMMM'),
    };
  }
}
