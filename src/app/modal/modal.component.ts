import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  forColleague = false;

  form: FormGroup = new FormGroup({
    date: new FormControl(
      new Date(moment(this.data.currentDay.date).valueOf())
    ),
    name: new FormControl(''),
    colleague: new FormControl(false),
    acceptOfficeRules: new FormControl(false),
  });

  currentDate: moment.Moment = moment();
  ngOnInit(): void {}

  constructor(
    public bookingService: BookingService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      currentDay: { date: moment.Moment; user: string; type: string };
      currentRoom: {
        name: string;
        roomNumber: number;
        hide: boolean;
        places: [];
      };
      currentPlace: { number: number };
    }
  ) {}

  public bookForColleague() {
    this.forColleague = this.forColleague ? false : true;
  }

  public onSubmit() {
    console.log(this.form.value);
    this.bookingService.addBooking({
      room: this.data.currentRoom.roomNumber,
      user: this.form.value.name,
      date: moment(this.form.value.date),
      bookingPlace: this.data.currentPlace.number,
    });
  }
}
