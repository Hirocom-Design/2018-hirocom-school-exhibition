import React from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
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
  renderTitleblock() {
    return (
      <div className='l-sidebar__titleblock'>
        <Link to='/' className='l-sidebar__link' onClick={this.props.toggleClassFnc}>
          <img src='assets/logo/top_logo.svg' alt='広島コンピュータ専門学校 学生作品展2018' className='l-sidebar__brand'/>
        </Link>
      </div>
    );
  }
  renderListblock() {
    return (
      <div className='l-sidebar__listblock'>
        <ul className='l-sidebar__listbox l-sidebar__listbox--main p-nav'>
          {this.renderLink(0)}
          {this.renderLink(1)}
          {this.renderLink(2)}
          {this.renderLink(3)}
          {this.renderLink(4)}
          {this.renderLink(5)}
        </ul>
        <ul className='l-sidebar__listbox l-sidebar__listbox--sub p-nav'>
          {this.renderAccessLink()}
          <li className='l-sidebar__list p-nav__list'>
            <a href='https://twitter.com/hirocom_sakuhin' className='l-sidebar__item p-nav__item' onClick={this.props.toggleClassFnc} target='new'>TWITTER</a>
          </li>
        </ul>
      </div>
    );
  }
  renderAccessLink() {
    return (
      <li className='l-sidebar__list p-nav__list'>
        <Link to={this.state.access[1]} className='l-sidebar__item p-nav__item' onClick={this.props.toggleClassFnc}>
          {this.state.access[0]}
        </Link>
      </li>
    );
  }
  renderLink(i) {
    return (
      <li className='l-sidebar__list p-nav__list'>
        <Link to={this.state.links[i]} className='l-sidebar__item p-nav__item' onClick={this.props.toggleClassFnc}>
          <span className='l-sidebar__span'>#</span>{this.state.titles[i]}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <aside className='l-sidebar'>
        <div className='l-sidebar__container'>
          {this.renderTitleblock()}
          {this.renderListblock()}
        </div>
      </aside>
    );
  }
}

module.exports = Sidebar;
