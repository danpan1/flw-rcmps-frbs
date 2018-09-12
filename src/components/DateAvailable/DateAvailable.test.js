import React from 'react';
import { shallow } from 'enzyme';
import DateAvailable from './DateAvailable';
import { Link } from 'react-router-dom';
import { defaultProps } from '../../utils/dataForTest';

it('DateAvailable.js', () => {
  const wrapper = shallow(<DateAvailable {...defaultProps} />);
  const welcome = (
    <div key={1536656400000}>
      <Link to={'new/' + 1536656400000} key={1536656400000}>
        12:00
      </Link>
    </div>
  );

  expect(wrapper.contains(welcome)).toEqual(true);
});
