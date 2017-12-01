import React from 'react';

class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
    }
    this.toggleText = this.toggleText.bind(this);

  }
  renderItem() {
    return (
      <span className="c-menu__item"></span>
    )
  }
  toggleText(){
    this.setState({
      menuText: !this.props.propsIsActive
    })
  }
  render() {
    return (
      <div className='c-menu' onClick={(event) => { this.props.toggleClassFnc(); this.toggleText();}}>
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        <p className={this.props.propsIsActive ? 'c-menu__text c-menu__text--active' : 'c-menu__text'}>{this.props.propsIsActive ? 'CLOSE' : 'MENU'}</p>
        <div className='c-menu__bg'></div>
      </div>
    );
  }
};
module.exports = Menu;
