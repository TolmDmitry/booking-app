import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MaterialExampleModule } from 'src/material.module';
import { BookingService } from './booking.service';
import { CalendarService } from './calendar.service';
import { CommonModule } from '@angular/common';
import { WeekSelectorComponent } from './calendar/week-selector/week-selector.component';
import { WeekHeaderComponent } from './calendar/week-header/week-header.component';
import { DayListComponent } from './calendar/day-list/day-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ModalComponent,
    WeekSelectorComponent,
    WeekHeaderComponent,
    DayListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  providers: [BookingService, CalendarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
