import React, { Component } from 'react';
import './App.css';
import {Button, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox } from 'react-bootstrap';
import data from './users.json';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js';
import store from './store.js';

class Login extends Component {
  constructor(){
    super()

    this.state = {
      mail:'',
      password:''
    }

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
  }

  handleLogIn(){
    const { history } = this.props;

    var user = {
      mail: this.state.mail,
      password: this.state.password
    }
    store.dispatch({
      type: "LOG_IN", user
    })

    /*
    if(resultado){
      history.push('/home');
    }else{
      alert("Contraseña Incorrecta");
    }
    */
  }

  handleEmailChanged(e){
    this.setState({mail: e.target.value});
  }

  handlePasswordChanged(e){
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className="container form-signin">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={10}>
              <FormControl value={this.state.mail} onChange={this.handleEmailChanged} type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={10}>
              <FormControl value={this.state.password} onChange={this.handlePasswordChanged} type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={10}>
              <Button onClick={this.handleLogIn} value="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
    </div>
    );
  }
}

export default Login;
