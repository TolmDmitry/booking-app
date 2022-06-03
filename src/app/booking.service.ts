import * as moment from 'moment';
import { Room } from './calendar.service';

export interface BookedPlace {
  date: moment.Moment;
  users: string[];
  type: string;
  bookingPlace?: number;
  usersCountHide: boolean;
}

export class BookingService {
  rooms: Array<Room> = [
    {
      name: 'ROOM 1',
      roomNumber: 1,
      hide: true,
      places: [{ number: 1 }],
      bookedPlaces: [],
    },
    {
      name: 'ROOM 2',
      roomNumber: 2,
      hide: true,
      places: [{ number: 1 }],
      bookedPlaces: [],
    },
  ];
  public addBooking({ date, user, room, bookingPlace }: any) {
    const roomIndex = this.rooms.findIndex((bookingRoom) => {
      return bookingRoom.roomNumber === room;
    });
    let index = this.rooms[roomIndex].bookedPlaces.findIndex((bookedPlace) => {
      return moment(bookedPlace.date).isSame(date);
    });
    this.rooms[roomIndex].bookedPlaces[index].bookingPlace = bookingPlace;
    this.rooms[roomIndex].bookedPlaces[index].type = 'busy';
    this.rooms[roomIndex].bookedPlaces[index].users.push(user);
  }

  public deleteBooking({ date, user, room }: any) {
    const roomIndex = this.rooms.findIndex((bookingRoom) => {
      return bookingRoom.roomNumber === room;
    });
    let index = this.rooms[roomIndex].bookedPlaces.findIndex((bookedPlace) => {
      return moment(bookedPlace.date).isSame(date);
    });
    this.rooms[roomIndex].bookedPlaces[index].users = this.rooms[
      roomIndex
    ].bookedPlaces[index].users.filter((userName) => {
      return userName !== user;
    });
    if (!this.rooms[roomIndex].bookedPlaces[index].users.length) {
      this.rooms[roomIndex].bookedPlaces[index].type = 'free';
    }
  }
  public getPlaces(week: Array<moment.Moment> = []): Array<BookedPlace> {
    return week?.map((day) => {
      return {
        date: day,
        users: [],
        type: 'free',
        room: 1,
        usersCountHide: true,
      };
    });
  }

  public setupWeek(week: Array<moment.Moment> = []) {
    return this.rooms.map((room) => {
      room.bookedPlaces = this.getPlaces(week);
    });
  }
}
