import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logoUrl from '../../assets/images/logo.png'
import loginLogoUrl from '../../assets/images/login-logo.png'
import { Input, Form, Icon, Button, message } from 'antd'
import { login } from '../../api/login/index'

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(values).then((resp) => {
          if (resp.code === 200) {
            sessionStorage.setItem('token', true)
            this.props.history.push('/index/api');
          } else {
            message.error(resp.message);
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <div className="logo">
          <div className="cell">
            <img src={loginLogoUrl}/>
            <span >江西省水利数据共享系统</span>
          </div>
        </div>
        <div className="login-con">
          <div className="cell">
            <div className="login-header">
              <img src={logoUrl}/>
              <span>江西省水利数据共享系统</span>
            </div>
            <div className="title">
              账号登录
            </div>
            <div className="login-box">
              <Form  className="login-form">
                <Form.Item>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} className="login-input" placeholder="用户名" />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('passWord', {
                    rules: [{ required: true, message: '请输入密码' }],
                  })(
                    <Input type="password" prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />} className="login-input" placeholder="密码" />
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={this.handleSubmit} className="login-btn">登录</Button>
                </Form.Item>
                <Form.Item>
                  <a href="http://10.136.6.59:8080/HR/f/anon/resetPswd" className="link" target="_blank"><span>忘记密码？</span></a>
                </Form.Item>

              </Form>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm)