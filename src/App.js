import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Header from './Header.js';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Routes from './routes.js'

class App extends Component {
  /*static propTypes = {
    children:PropTypes.object.isRequired
  }*/
  render() {
    const {children} = this.props;

    return (
      <div className="App">
         <Header></Header>
         <Routes></Routes>
      </div>
    );
  }
}

export default App;
