import React from 'react';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import validate from './validate';
import renderField from './renderField';
import { withProps } from 'recompose';
import OutsideFields from "./OutsideFields";

const WizardFormFirstPage = props => {
  const { handleSubmit, hasEmailValue } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <OutsideFields {...props}/>
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

const selector = formValueSelector('wizard'); // <-- same as form name
const enhance = compose(
  withProps(() => ({
    initialValues: { lastName: 'valera' },
  })),
  connect(state => {
    // can select values individually
    const hasEmailValue = selector(state, 'hasEmail');
    return {
      hasEmailValue,
    };
  }),
  reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
  }),
);
export default enhance(WizardFormFirstPage);
