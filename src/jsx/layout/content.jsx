import React, {Component} from 'react';
import {render} from 'react-dom';
import {Switch, Route} from 'react-router-dom';

import Footer from './footer.jsx';

import Top from './pages/top.jsx';
import Face from './pages/face.jsx';
import Fact from './pages/fact.jsx';
import Fantasy from './pages/fantasy.jsx';
import Fashion from './pages/fashion.jsx';
import Flower from './pages/flower.jsx';
import Future from './pages/future.jsx';
import Concept from './pages/concept.jsx';
import Access from './pages/access.jsx';

const Content = () => (
  <div className='l-content'>
    <Switch>
      <Route exact path='/' component={Top}/>
      <Route path='/concept' component={Concept}/>
      <Route path='/access' component={Access}/>
      <Route path='/fact' component={Fact}/>
      <Route path='/fantasy' component={Fantasy}/>
      <Route path='/future' component={Future}/>
      <Route path='/fashion' component={Fashion}/>
      <Route path='/face' component={Face}/>
      <Route path='/flower' component={Flower}/>
    </Switch>
    <Footer/>
  </div>
)

module.exports = Content
