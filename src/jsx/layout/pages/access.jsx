import React from 'react';

class Access extends React.Component {
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
      <div className="p-access" id='access'>
        <div className='p-access__hero'>
          <h1 className='p-access__title'>Access</h1>
        </div>
        <div className='p-access__container'>
          <div className='p-access__textbox'>
            <div className='p-access__textblock'>
              <p className='p-access__destination'>広島コンピュータ専門学校</p>
              <p className='p-access__destination'>2Fラウンジ</p>
              <p className='p-access__add'>広島県広島市西区横川新町7−12</p>
              <p className='p-access__tell'>TEL 082-291-5050</p>
              <a href="https://goo.gl/maps/WTaypixUpWv" className='p-access__link' target='new'>Goole Mapはこちら</a>
            </div>
            <div className='p-access__textblock'>
              <p className='p-access__text'>お越しの際は公共交通機関でお願いします。JRの場合は横川駅から徒歩3分、市内電車の場合は横川一丁目電停から徒歩2分です。入場無料ですので気軽に足をお運びください。</p>
            </div>
          </div>
          <img src="./assets/img/map_bg.png" alt="地図" className='p-access__mapimage' onClick={this.toggleClass}/>
          <p className='p-access__careful'>※学生作品展は交通費補助の対象外です。あらかじめご了承ください。</p>
        </div>
        <div className={this.state.isActive ? 'c-modal is-active' : 'c-modal'} onClick={this.toggleClass}>
          <img src="./assets/img/map_bg.png" alt="地図" className='c-modal__image'/>
        </div>
      </div>
    );
  }
};

module.exports = Access;
