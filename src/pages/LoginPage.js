// @flow
import * as React from 'react';
import AuthService from '../api/AuthService';
import GoogleButton from 'react-google-button';
import Card from 'antd/es/card';
import Input from 'antd/es/input/Input';
import Form from 'antd/es/form/Form';
import Icon from 'antd/es/icon';
import Checkbox from 'antd/es/checkbox/Checkbox';
import Button from 'antd/es/button/button';
import { Field, reduxForm } from 'redux-form';
import { compose, withProps } from 'recompose';
import './LoginPage.css';
import type { RouterHistory } from 'react-router-dom';
import type { FormProps } from 'redux-form/lib/types';
import type { FieldProps } from 'redux-form/lib/FieldProps.types';

const FromItem = Form.Item;
// todo почему не подсвечивает signInWithGoogle как отсутствующий в пропах
type Props = {
  ...$Exact<FormProps>,
  history: RouterHistory,
  // TODO как указать для signInWithGoogle что она должна быть именно от AuthService.signInWithGoogle
  // todo периодечски Flow отрубается, весьма неприятно
  signInWithGoogle: () => void,
};
type ReduxFormFieldFn = (props: FieldProps) => React.Node;

// AntInputReduxFormAdaptor
const AntInputRFA: ReduxFormFieldFn = ({
  input,
  meta: { touched, error, warning },
  ...rest
}) => (
  <FromItem>
    <Input {...input} {...rest} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </FromItem>
);

const Comp3: ReduxFormFieldFn = ({ input }) => (
  <Checkbox {...input}>Remember me</Checkbox>
);

const handleSubmit = async values => {
  console.log('LoginPage handleSubmit', values);
};

class LoginPage extends React.Component<Props> {
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="LoginPage">
        <Card style={{ width: 300 }} className="LoginPage__card">
          <form onSubmit={handleSubmit} className="login-form">
            <Field
              name="email"
              type="email"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              component={AntInputRFA}
            />
            <Field
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
              component={AntInputRFA}
            />
            <Field name="remember" component={Comp3} />
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <FromItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={submitting}
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FromItem>
            <FromItem>
              <GoogleButton onClick={this.props.signInWithGoogle} />
            </FromItem>
          </form>
        </Card>
      </div>
    );
  }
}
const enhance = compose(
  withProps(props => ({
    onSubmit: handleSubmit,
    signInWithGoogle: AuthService.signInWithGoogle,
  })),
  reduxForm({ form: 'simple' }), // a unique identifier for this form
);
export default enhance(LoginPage);
