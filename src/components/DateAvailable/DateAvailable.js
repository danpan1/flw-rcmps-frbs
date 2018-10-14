// @flow

import React from 'react';
import format from 'date-fns/format';
import { makeArrayOfDates } from '../../utils/makeArrayOfDates';
import type { IMakeArrayOfDatesProps } from '../../utils/makeArrayOfDates';
import { Link } from 'react-router-dom';

function DateAvailable(props: IMakeArrayOfDatesProps) {
  const { startDay } = props; /* ? */
  const formattedDate = format(startDay, 'dd MMMM yyyy HH:mm dddd');
  const dates = makeArrayOfDates(props);
  return (
    <div>
      <div>Date : {formattedDate} </div>
      {dates.map(date => (
        <div key={date}>
          <Link to={`new/${date}`} key={date}>
            {format(date, 'HH:mm')}
          </Link>
        </div>
      ))}
    </div>
  );
}

DateAvailable.defaultProps = {
  startDay: new Date(),
  startTime: '10:00',
  interval: 30,
  endTime: '20:00',
};

export default DateAvailable;
