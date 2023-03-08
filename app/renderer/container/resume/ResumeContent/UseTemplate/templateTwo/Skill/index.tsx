import React from 'react';
import './index.less';

function Skill() {
  return (
    <div styleName="container">
      <h2 styleName="skill">技能</h2>
      <div styleName="line"></div>
      <div styleName="content">
        <div styleName="item">
          <div styleName="round"></div>
          <div>熟悉JavaScript作用域，闭包，原型链，promise，了解TypeScript常用类型</div>
        </div>
        <div styleName="item">
          <div styleName="round"></div>
          <div>熟悉Vue全家桶，并结合Element-UI，Vant等组件库完成开发，了解Vue响应式系统原理</div>
        </div>
        <div styleName="item">
          <div styleName="round"></div>
          <div>熟悉Vue全家桶，并结合Element-UI，Vant等组件库完成开发，了解Vue响应式系统原理</div>
        </div>
        <div styleName="item">
          <div styleName="round"></div>
          <div>了解Webpack和Vite，对webpack性能优化有一定理解</div>
        </div>
        <div styleName="item">
          <div styleName="round"></div>
          <div>了解React，Redux，React-Router等React相关生态</div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
