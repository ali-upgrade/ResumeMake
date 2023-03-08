import React from 'react';
import './index.less';

function Work() {
  return (
    <div styleName="container">
      <h2 styleName="work">工作经历</h2>
      <div styleName="line"></div>
      <div styleName="item">
        <div styleName="title">
          <div styleName="school">复深蓝 - 前端开发实习生</div>
          <div styleName="time">2023.01 - 至今</div>
        </div>
        <div styleName="content">
          参与信托App开发（Vue)：
          <br />
          项目采用分层设计，数据接口，业务逻辑，页面展示分层开发，数据与逻辑解耦，便于逻辑复用
          <br />
          登录模块采用token续签优化用户体验，实现无感刷新登录态
          <br />
          熟悉使用DevTools进行样式检查，断点调试，网络请求预览，Vue组件调试的方法
          <br />
        </div>
      </div>
      <div styleName="item">
        <div styleName="title">
          <div styleName="school">慧优科技 - 前端开发实习生</div>
          <div styleName="time">2022.07 - 2022.08</div>
        </div>
        <div styleName="content">
          参与微信小程序开发:
          <br />
          对基于uniapp的商城小程序进行维护和开发
        </div>
      </div>
    </div>
  );
}

export default Work;
