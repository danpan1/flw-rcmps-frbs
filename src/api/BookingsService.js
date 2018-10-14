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
        // TODO flow error
        (snapshot:any).forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          const item = { id: childKey, ...childData };
          items.push(item);
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
