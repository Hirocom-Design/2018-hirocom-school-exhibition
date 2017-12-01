import React from 'react';

class Common extends React.Component {
  renderHero() {
    return (
      <div className={this.state.className.hero}>
        <h1 className='c-hero__title'>{this.state.title}</h1>
      </div>
    )
  }
  renderDescription() {
    return (
      <div className='p-page__box p-page__box--description'>
        <img src={this.state.imgSrc} alt={this.state.name} className='p-page__titleimg'/>
        <p className='p-page__descriptiontext'>{this.state.description}</p>
      </div>
    )
  }
  renderList(props) {
    return (
      <div className='p-page__box p-page__box--list'>
        <h2 className='p-page__listtitle'>{this.state.listTitle}</h2>
        <ul className='p-page__list'>
          {this.props.list}
          <li className='p-page__listitem'>{this.state.listOther}</li>
        </ul>
      </div>
    )
  }
  renderContents() {
    return (
      <section className='p-page'>
        <div className='p-page__container'>
          {this.renderDescription()}
        </div>
        {this.renderList()}
        <div className='p-page__overlay'>
          <div className='p-page__bg'></div>
        </div>
      </section>
    );
  }
  render() {
    this.setState({
      name: this.props.name,
      title: '#' + this.props.name,
      className: {
        base: 'p-' + this.props.name,
        hero: 'p-' + this.props.name + '__hero' + ' c-hero',
        container: 'p-' + this.props.name + '__cotainer'
      },
      imgSrc: './assets/img/' + this.props.name + '.svg',
      description: this.props.description,
      exhibitionList: this.props.exhibitionList
    })
    return (
      <div className={this.state.className.base}>
        {this.renderHero()}
        {this.renderContents()}
      </div>
    );
  }
}
module.exports = Common;
