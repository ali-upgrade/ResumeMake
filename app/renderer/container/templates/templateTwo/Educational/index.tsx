import React from 'react';
import './index.less';

function Educational() {
  return (
    <div styleName="container">
      <h2 styleName="educational">教育背景</h2>
      <div styleName="line"></div>
      <div styleName="item">
        <div styleName="title">
          <div styleName="school">内蒙古民族大学 - 计算机科学与技术</div>
          <div styleName="time">2019.09 - 2023.07</div>
        </div>
        <div styleName="content">
          在2020年，2021，2022年三学年获得校级三等奖学金
          <br /> 相关课程：计算机网络 HTML5 操作系统 计算机组成原理 数据结构 算法设计与分析
        </div>
      </div>
    </div>
  );
}

export default Educational;
