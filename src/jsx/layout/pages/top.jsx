import React from 'react';
import Body from './body';

import Concept from './concept.jsx';
import Access from './access.jsx';

const Top = () => (
  <div className='p-top' id='top'>
    <Hero/>
    <Concept/>
    <Brand/>
  </div>
)

const Hero = () => (
  <div className='p-top__hero'>
    <div className='p-top__text p-top__text--first'></div>
    <h2 className='p-top__logo'></h2>
    <div className='p-top__text p-top__text--last'></div>
  </div>
)
const Brand = () => (
  <a href='http://www.hsc.ac.jp/' target='new' className='p-top__brand'></a>
)

module.exports = Top;
