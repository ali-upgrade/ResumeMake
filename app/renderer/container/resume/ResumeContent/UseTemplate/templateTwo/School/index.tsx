import React from 'react';
import './index.less';

function School() {
  return (
    <div styleName="container">
      <h2 styleName="work">校园经历</h2>
      <div styleName="line"></div>
      <div styleName="item">
        <div styleName="title">
          <div styleName="school">创新创业学院享e校团队</div>
          <div styleName="time">2021.10 - 2022.06</div>
        </div>
        <div styleName="content">
          工作内容：
          <br />
          对基于uniapp的享e校商城小程序进行维护和开发
          <br />
          管理后台商品上线和设置不同用户路由权限，同时组织部员对于新模块进行开发
          <br />
          团队一起CodeReview，提高个人代码编写能力和代码质量
          <br />
        </div>
      </div>
    </div>
  );
}

export default School;
