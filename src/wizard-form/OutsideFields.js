/**
 * Created by danilpankrashin on 18/09/2018.
 */
import React  from 'react';
import { Field } from 'redux-form';
import renderField from "./renderField";

function OutsideFields(props) {
  return (
    <div>
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field name="hasEmail" id="hasEmail" component="input" type="checkbox" />
      {props.hasEmailValue && (
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default OutsideFields;
