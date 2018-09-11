// @flow
import React, { Component } from 'react';
import format from 'date-fns/format';
import type { Match } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

type Props = {|
  match: Match,
|};

class NewBookingPage extends Component<Props> {
  render() {
    const timestamp = +this.props.match.params.date;
    const date = format(new Date(timestamp), 'DD MMMM YYYY HH:mm dddd');
    return (
      <div>
        <h1>NewBookingPage {date}</h1>
        <Formik
          initialValues={{ email: '', name: '', duration: '30' }}
          validate={values => {
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify({ ...values, date }, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
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

export default NewBookingPage;
