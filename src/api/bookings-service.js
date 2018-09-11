import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAZZRGFnOciwLZsSMjBlilnxfIlPcXXtc4',
  // authDomain: "projectId.firebaseapp.com",
  databaseURL: 'https://flw-rcmps-frbs.firebaseio.com',
  // storageBucket: "bucket.appspot.com"
};

class BookingsService {
  constructor() {
    firebase.initializeApp(config);
    this.database = firebase.database();
    this.ref = 'bookings';
  }

  get bookings() {
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

  setBooking(userId, name, email, date) {
    this.database.ref(this.ref + '/' + userId).set({
      username: name,
      email: email,
      date: date,
    });
  }
}
export default new BookingsService();
