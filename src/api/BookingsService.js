// @flow
import firebase from 'firebase';
import type { Database } from 'firebase';

const config = {
  apiKey: 'AIzaSyAZZRGFnOciwLZsSMjBlilnxfIlPcXXtc4',
  // authDomain: "projectId.firebaseapp.com",
  databaseURL: 'https://flw-rcmps-frbs.firebaseio.com',
  // storageBucket: "bucket.appspot.com"
};
export type IBooking = {
  id?: string,
  name: string,
  email: string,
  date: string,
  timestamp: number,
};

class BookingsService {
  ref: string;
  database: Database;

  constructor() {
    firebase.initializeApp(config);
    this.database = firebase.database();
    this.ref = 'bookings';
  }

  get bookings(): Promise<IBooking[]> {

    console.log('get bookings');
    return new Promise((resolve, reject) => {
      let items = [];
      const ref = this.database.ref(this.ref);
      ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          const item = { id: childKey, ...childData };
          items.push(item);
        });
        resolve(items);
      });
    });
  }

  book({ name, email, date, timestamp }: IBooking): Promise<void> {
    return new Promise((resolve, reject) => {
      this.database.ref(this.ref + '/').push(
        {
          name,
          email,
          date,
          timestamp,
        },
        error => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        },
      );
    });
  }
}

export default new BookingsService();
