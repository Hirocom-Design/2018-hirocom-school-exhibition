import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';


class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [
        'FACT',
        'FANTASY',
        'FUTURE',
        'FASHION',
        'FACE',
        'FLOWER'
      ],
      links: [
        '/fact',
        '/fantasy',
        '/future',
        '/fashion',
        '/face',
        '/flower'
      ],
      access: ['ACCESS', '/access']
    };
  }
  renderNav() {
    return (
        <ul className='l-footer__nav'>
          <li className='l-footer__list'>
            <Link to='' className='l-footer__item'>
              TOP
              </Link>
          </li>
          {this.renderLink(0)}
          {this.renderLink(1)}
          {this.renderLink(2)}
          {this.renderLink(3)}
          {this.renderLink(4)}
          {this.renderLink(5)}
          {this.renderAccessLink()}
        </ul>
    );
  }
  renderLink(i) {
    return (
      <li className='l-footer__list'>
        <Link to={this.state.links[i]} className='l-footer__item'>
          <span className='l-footer__span'>#</span>{this.state.titles[i]}
        </Link>
      </li>
    );
  }

  renderAccessLink() {
    return (
      <li className='l-footer__list'>
        <Link to={this.state.access[1]} className='l-footer__item'>
          {this.state.access[0]}
        </Link>
      </li>
    );
  }
  render() {
    return (
      <div className='l-footer'>
        {this.renderNav()}
        <p className='l-footer__legal'>Copyright © Hiroshima Computer College. All Rights Reserved.</p>
      </div>
    );
  }
};

module.exports = Footer
