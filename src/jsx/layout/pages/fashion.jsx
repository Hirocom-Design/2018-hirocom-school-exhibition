import React from 'react';
const data = {
  name: 'fashion',
  description: 'ファッション・流行という意味より、服のデザインなどのを展示いたします。'
};
const exhibitionList =
  {
    name: 'クロッキー体験',
  detail: 'コスプレした生徒のクロッキー(短時間描画)ができます！実際の授業で行われていることを体験しながら、人体や服装の構造の理解を深めましょう。'
};

class Fashion extends React.Component {
  constructor() {
    const baseClass = 'p-' + data.name;
    super();
    this.state = {
      name: data.name,
      title: '#' + data.name,
      listTitle: '展示作品',
      listOther: 'その他(授業作品など)...',
      className: {
        base: baseClass,
        hero: baseClass + '__hero' + ' c-hero',
        container: baseClass + '__cotainer'
      },
      imgSrc: './assets/img/' + data.name + '.svg',
      exhibition: {
        title: exhibitionList.name,
        detail: exhibitionList.detail
      },
      description: data.description
    }
  }
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
  renderList() {
    // exhibitionListの数だけリストを生成
    return (
      <div className='p-page__box p-page__box--list'>
        <h2 className='p-page__listtitle'>{this.state.listTitle}</h2>
        <div className='p-page__list'>
          <p className='p-page__listitem'>{this.state.exhibition.title}</p>
          <p className='p-page__listdetail'>{this.state.exhibition.detail}</p>
          <p className='p-page__listitem'>{this.state.listOther}</p>
        </div>
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
    return (
      <div className={this.state.className.base}>
        {this.renderHero()}
        {this.renderContents()}
      </div>
    );
  }
}
module.exports = Fashion;
