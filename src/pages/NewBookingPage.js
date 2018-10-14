// @flow

import * as React from 'react';
import format from 'date-fns/format';
import type { Match } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import type { BookingType } from 'api/BookingsService';
import connect from 'react-redux/es/connect/connect';
import { bookThunk } from 'reducks/bookings';
import type { Dispatch } from 'flow-types/reducks-types';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  bookThunk: (values) => dispatch(bookThunk(values)),
});
type MethodsFromRedux = $Exact<$Call<typeof mapDispatchToProps, Dispatch>>;
type Props = {
  ...MethodsFromRedux,
  match: Match
};

class NewBookingPage extends React.Component<Props> {
  handleSubmit = (
    values: BookingType,
    { setSubmitting }: { setSubmitting: boolean => void },
  ) => {
    this.props.bookThunk(values).then(()=>setSubmitting(false))
  };

  render() {
    const timestamp = +this.props.match.params.date;
    const date = format(new Date(timestamp), 'dd MMMM yyyy HH:mm dddd');
    const initValues: BookingType = {
      email: '',
      name: '',
      duration: '30',
      timestamp,
      date,
    };
    return (
      <div>
        <h1>NewBookingPage {date}</h1>
        <Formik
          initialValues={initValues}
          validate={(values: BookingType) => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={this.handleSubmit}
        >
          {({
            errors,
            touched,
            isSubmitting,
          }: {
            errors: BookingType,
            touched: BookingType,
            isSubmitting: boolean,
          }) => (
            <Form>
              <Field type="email" name="email" />
              {errors.email && touched.email && errors.email}
              <Field type="text" name="name" />
              {errors.name && touched.name && errors.name}
              <Field type="text" name="duration" />
              {errors.duration && touched.duration && errors.duration}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

type PropsFromParent = $Exact<$Diff<Props, MethodsFromRedux>>;
export default (connect(
  () => ({}),
  mapDispatchToProps,
)(NewBookingPage): React.ComponentType<PropsFromParent>);
