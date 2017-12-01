import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';


import Sidebar from './layout/sidebar.jsx';
import Content from './layout/content.jsx';
import Menu from './layout/component/menu.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isActive: false
    }
  this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  render() {
    return (
      //this.state.isActiveがtrueなら'l-wrap__box is-active'、falseなら'l-wrap__box'
      <div className={this.state.isActive ? 'l-wrap__box is-active' : 'l-wrap__box' }>
        <Menu toggleClassFnc={this.toggleClass} propsIsActive={this.state.isActive}/>
        <Sidebar toggleClassFnc={this.toggleClass}/>
        <Content/>
      </div>
    );
  }
};

render((
  <BrowserRouter>
    <div className='l-wrap' id='wrap'>
      <ScrollMemory/>
      <App/>
    </div>
  </BrowserRouter>
), document.getElementById('app'));
