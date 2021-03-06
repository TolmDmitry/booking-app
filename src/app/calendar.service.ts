import * as moment from 'moment';
import { BookedPlace } from './booking.service';

export interface Room {
  name: string;
  roomNumber: number;
  hide: boolean;
  places: { number: number }[];
  bookedPlaces: Array<BookedPlace>;
}

export class CalendarService {
  public getWeek(indexWeek: number) {
    const findWeek = this.getWeekDays().find(({ week }) => {
      return week === indexWeek;
    });
    return {
      week: findWeek,
      monthName: findWeek?.monthName,
      days: findWeek?.days,
    };
  }

  public getWeekDays() {
    return Array(28)
      .fill(0)
      .map((_, i) => moment.utc().add(i, 'day'))
      .map((day) => ({ day, week: day.isoWeek() }))
      .filter(
        ({ week }, i, arr) => arr.findIndex((info) => info.week === week) === i
      )
      .map(({ day, week }) => ({
        monthName: moment.utc().format('MMMM YYYY'),
        week: week,
        days: Array(7)
          .fill(0)
          .map((_, i) =>
            moment.utc(day).isoWeek(week).startOf('isoWeek').add(i, 'day')
          ),
      }));
  }
}
