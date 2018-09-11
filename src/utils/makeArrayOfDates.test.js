import React from 'react';
import { makeArrayOfDates } from './makeArrayOfDates';

const defaultProps = {
  startDay: new Date(1536683522048), // 09.11.2018 19:32
  startTime: '12:00', // for 12:00 will be 1536656400000
  interval: 30,
  endTime: '15:00',
};
// 12:00 - 15:00 with interval of 30 minutes for 09.11.2018
const arrayOfDates = [
  1536656400000,
  1536658200000,
  1536660000000,
  1536661800000,
  1536663600000,
  1536665400000,
  1536667200000,
];

// result = []
describe('makeArrayOfDates', () => {
  it('makeArrayOfDates 123', () => {
    expect(makeArrayOfDates(defaultProps)).toEqual(arrayOfDates);
  });
});
