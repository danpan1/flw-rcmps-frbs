// @flow

import { db } from './firebase';

export type BookingType = {
  id?: string,
  name: string,
  email: string,
  date: string,
  duration: string,
  timestamp: number,
};

class BookingsService {
  ref: string;

  constructor() {
    this.ref = 'bookings';
  }

  getBookings(): Promise<BookingType[]> {
    console.log('get bookings');
    return new Promise((resolve, reject) => {
      let items = [];
      const ref = db.ref(this.ref);
      ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          items.push({ id: childSnapshot.key, ...childSnapshot.val() });
          // TODO flow error
          return true;
        });
        resolve(items);
      });
    });
  }

  book(body: BookingType): Promise<void> {
    return new Promise((resolve, reject) => {
      db.ref(`${this.ref}/`).push(body, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

export default new BookingsService();
