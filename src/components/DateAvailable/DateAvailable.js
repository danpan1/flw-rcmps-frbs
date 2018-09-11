// @flow
import React from 'react';
import format from 'date-fns/format';
import { makeArrayOfDates } from '../../utils/makeArrayOfDates';
import type { IMakeArrayOfDatesProps } from '../../utils/makeArrayOfDates';

type Props = {
  ...$Exact<IMakeArrayOfDatesProps>,
  onClick: (date: number) => void,
};
function DateAvailable(props: Props) {
  const { startDay } = props;
  const { onClick, ...forMakeArray } = props;
  const formattedDate = format(startDay, 'DD MMMM YYYY HH:mm dddd');
  const dates = makeArrayOfDates(forMakeArray);
  return (
    <div>
      <div>Date : {formattedDate} </div>
      {dates.map(date => (
        <div key={date}>{format(date, 'HH:mm')}</div>
      ))}
    </div>
  );
}

DateAvailable.defaultProps = {
  startDay: new Date(),
  startTime: '12:00',
  interval: 30,
  endTime: '15:00',
};

export default DateAvailable;
