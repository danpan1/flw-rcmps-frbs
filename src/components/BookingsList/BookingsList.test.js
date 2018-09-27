import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';


// TODO test async class
describe('BookingsList', () => {
  let spy;
  let loadBookings = jest.fn();
  beforeAll(() => {
    // get rid of async
    // BookingsService = { bookings: { then: jest.fn() } };
    spy = jest.spyOn(loadBookings)
    // spy = jest.fn();
    // spy = jest.spyOn(singleton, 'myPromise');
  });
  it('Should render div and Link with 12:00 and timestamp from defaultProps', () => {
    expect
    const wrapper = shallow(<BookingsList loadBookings={loadBookings} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
