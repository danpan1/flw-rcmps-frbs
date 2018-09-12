import React from 'react';
import {makeArrayOfDates} from './makeArrayOfDates';
import {defaultProps} from "./dataForTest";

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
