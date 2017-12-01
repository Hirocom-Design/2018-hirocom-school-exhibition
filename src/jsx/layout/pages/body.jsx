import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class Body extends React.Component {
  render() {
    return (
      <h1 className={this.props.clsName}>{this.props.title}</h1>
    );
  }
};

module.exports = Body;
