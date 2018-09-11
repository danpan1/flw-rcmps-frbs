// @flow
import React, { Component } from 'react';
import format from 'date-fns/format';
import type { Match } from 'react-router-dom';

type Props = {|
  match: Match,
|};

class NewBookingPage extends Component<Props> {
  render() {
    const timestamp = +this.props.match.params.date;
    const date = format(new Date());
    const date2 = format(new Date(timestamp), 'DD MMMM YYYY HH:MM dddd');
    return (
      <div>
        NewBookingPage {date} <br /> {date2}
      </div>
    );
  }
}

export default NewBookingPage;
