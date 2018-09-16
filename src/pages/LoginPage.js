import React from 'react';
import AuthService from '../api/AuthService';
import GoogleButton from 'react-google-button';
import './LoginPage.css';
import { CALENDAR } from '../routes';
import { withRouter } from 'react-router-dom';
import Card from "antd/es/card";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import Icon from "antd/es/icon";
import Checkbox from "antd/es/checkbox/Checkbox";
import Button from "antd/es/button/button";

const FormItem = Form.Item;

class LoginPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        return;
      }
      console.log('AuthService.signInWithGoogle', values);
    });
  };

  handleLoginWithGoogle = () => {
    AuthService.signInWithGoogle().then(() => {
      console.log(CALENDAR);
      // TODO if wasn`t logged in redirect to the previous route
      setTimeout(() => this.props.history.push(CALENDAR), 0);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="LoginPage">
        <Card style={{ width: 300 }} className="LoginPage__card">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
            <GoogleButton onClick={this.handleLoginWithGoogle} />
          </Form>
        </Card>
      </div>
    );
  }
}

export default withRouter(Form.create()(LoginPage));
