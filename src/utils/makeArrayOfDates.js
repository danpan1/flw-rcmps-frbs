// @flow
import addMinutes from 'date-fns/add_minutes';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

export type IMakeArrayOfDatesProps = {
  startDay: Date,
  startTime: string,
  interval: number, //minutes
  endTime: string,
};
const getTimestamp = ({ day, time }: { day: Date, time: string }) => {
  const getReadableDate = format(new Date(day), 'MM.DD.YYYY');
  const setDateTime = parse(`${getReadableDate} ${time}`);
  return setDateTime.getTime(); // ?
};

export const makeArrayOfDates = ({
  startDay,
  startTime,
  interval,
  endTime,
}: IMakeArrayOfDatesProps) => {
  let result = [];
  let currentTimestamp = getTimestamp({ day: startDay, time: startTime }); // ?
  const endTimestamp = getTimestamp({ day: startDay, time: endTime }); // ?
  while (currentTimestamp <= endTimestamp) {
    result.push(currentTimestamp); // ?
    currentTimestamp = addMinutes(currentTimestamp, interval).getTime(); // ?
  }
  return result; //?
};
