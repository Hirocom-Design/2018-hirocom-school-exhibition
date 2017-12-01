import React from 'react';
import {Link} from 'react-router-dom';

const message = [
  '広島コンピュータ専門学校 学生作品展2018のテーマ「 #ffffff 」。',
  '2018年の作品展はデザインコースとゲームコースの共同で開催いたします。',
  '「＃」はハッシュタグを連想して、発信していく思いを。',
  '"FFFFFF"はホワイトのカラーコードから、',
  'キャンパスに自分たちの色を付けていこうという思いを込めて名付けました。',
  'キャッチコピー「fから創り出せ。僕らの色彩。」はテーマの通り',
  '白いキャンパスに新たなアイデアを生み出そうと、"創り出せ"。',
  '様々な作品があることを、"色彩"に見立てています。',
]

const Concept = () => (
  <section className='p-concept' id='concept'>
    <Intro/>
    <IntervalRight/>
    <Theme/>
    <IntervalLeft/>
    <Details/>
    <ToTop/>
  </section>
)
class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      message: [
        message[0],
        message[1],
        message[2],
        message[3],
        message[4],
        message[5],
        message[6],
        message[7],
        message
      ]
    }
  }
  conceptText(i) {
    return (
      <p className='p-concept__text  p-concept__text--display'>{this.state.message[i]}</p>
    );
  }
  conceptTextMobile(i) {
    return (
      <p className='p-concept__text p-concept__text--mobile'>{this.state.message[i]}</p>
    );
  }
  render() {
    return (
      <div className='p-concept__container p-concept__container--left'>
        <div className='p-concept__textblock p-concept__textblock--left'>
          <h2 className='p-concept__title' alt='fから創り出せ。僕らの色彩。'></h2>
          <div className='p-concept__textarea'>
            {this.conceptText(0)}
            {this.conceptText(1)}
            {this.conceptText(2)}
            {this.conceptText(3)}
            {this.conceptText(4)}
            {this.conceptText(5)}
            {this.conceptText(6)}
            {this.conceptText(7)}
            {this.conceptTextMobile(8)}
          </div>
        </div>
        <div className='p-concept__logo p-concept__logo--right'></div>
      </div>
    )
  }
}
class Theme extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ['#ffffffより、fを頭文字に６つのテーマを展開した作品を展示いたします。']
    }
  }
  conceptText(i) {
    return (
      <p className='p-concept__theme-text'>{this.state.message[i]}</p>
    );
  }
  render() {
    return (
      <div className='p-concept__container'>
        <div className='p-concept__box'>
          <h2 className='p-concept__theme'>#ffffff</h2>
          {this.conceptText(0)}
        </div>
        <LinkBox/>
      </div>
    );
  }
}
class LinkBox extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [
        '#FACT',
        '#FANTASY',
        '#FUTURE',
        '#FASHION',
        '#FACE',
        '#FLOWER'
      ],
      links: [
        '/fact',
        '/fantasy',
        '/future',
        '/fashion',
        '/face',
        '/flower'
      ],
      descriptions: [
        '事実・証拠という意味より、実際に"モノ"を作り展示いたします。',
        '想像、空想という意味から、ファンタジーな作品やゲームコースの作品を展示いたします。',
        '未来・将来という意味より、この先更に普及していくであろうWebについて焦点を当てています。',
        'ファッション・流行という意味より、服のデザインなどのを展示いたします。',
        '顔・表情という意味より、人だけでなく様々な物事の表情についての作品を展示いたします。',
        '花という意味の通り、花を用いた作品を展示いたします。'
      ]
    }
  }
  linkBlock(i) {
    return (
      <Link to={this.state.links[i]} className='p-linkbox__block'>
        <div className='p-linkbox__bg'>
          <div className='p-linkbox__border'></div>
          <p className='p-linkbox__description'>
            {this.state.descriptions[i]}
          </p>
          <p className='p-linkbox__text'>
            {this.state.titles[i]}
          </p>
        </div>
      </Link>
    );
  }
  render() {
    return (
      <div className='p-linkbox'>
        {this.linkBlock(0)}
        {this.linkBlock(1)}
        {this.linkBlock(2)}
        {this.linkBlock(3)}
        {this.linkBlock(4)}
        {this.linkBlock(5)}
      </div>
    );
  }
}
class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [
        'ゲーム・デザインコース',
        '学生作品展2018',
        '入場無料',
        '1.26(金)-28(日)',
        '広島コンピュータ専門学校',
        '広島県広島市西区横川新町7−12',
        '10:00-16:00',
        '(最終日は14:00まで)'
      ]
    }
  }
  render() {
    return (
      <div className='p-concept__container p-concept__container--right'>
        <div className='p-concept__textblock p-concept__textblock--right'>
          <div className='p-detail'>
            <p className='p-detail__course'>{this.state.details[0]}</p>
            <p className='p-detail__title'>{this.state.details[1]}</p>
            <p className='p-detail__free'>{this.state.details[2]}</p>
            <p className='p-detail__date'>{this.state.details[3]}</p>
            <p className='p-detail__destination'>{this.state.details[4]}</p>
            <p className='p-detail__add'>{this.state.details[5]}</p>
            <Link to='/access' className='p-detail__access'>アクセス方法はこちら</Link>
            <p className='p-detail__time'>{this.state.details[6]}</p>
            <p className='p-detail__lasttime'>{this.state.details[7]}</p>
          </div>
        </div>
        <div className='p-concept__logo p-concept__logo--left'></div>
      </div>
    );
  }
}
class IntervalLeft extends React.Component {
  render() {
    return (
      <div className='p-interval'>
        <div className='p-interval__block p-interval__block--mask'></div>
        <div className='p-interval__block p-interval__block--logo'>
          <img src="assets/img/item4.svg" alt="logo" className='p-interval__logo p-interval__logo--left'/>
        </div>
      </div>
    );
  }
}
class IntervalRight extends React.Component {
  render() {
    return (
      <div className='p-interval'>
        <div className='p-interval__block p-interval__block--logo'>
          <img src="assets/img/item4.svg" alt="logo" className='p-interval__logo p-interval__logo--left'/>
        </div>
        <div className='p-interval__block p-interval__block--mask'></div>
      </div>
    );
  }
}
class ToTop extends React.Component {
  constructor(){
    super();
    this.state = {
      url: '/'
    }
  }
  render() {
    return (
        <Link to='/' className='c-totop'>
          <div  className='c-totop__box'></div>
        </Link>
    );
  }
}

module.exports = Concept;
