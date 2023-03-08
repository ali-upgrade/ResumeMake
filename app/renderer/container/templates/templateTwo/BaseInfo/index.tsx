import React from 'react';
import './index.less';
import user from '@assets/icon_194nchocp2b/user.png';
import phone from '@assets/icon_194nchocp2b/phone.png';
import home from '@assets/icon_194nchocp2b/home.png';
import email from '@assets/icon_194nchocp2b/email.png';

function BaseInfo() {
  return (
    <div styleName="container">
      <h1 styleName="username">梁栗</h1>
      <div styleName="floor">
        <div styleName="item">
          <img src={user} alt="" />
          <p> 男/2001.05</p>
        </div>
        <div styleName="item">
          <img src={home} alt="" />
          <p> https://ali-upgrade.github.io/have-advanced/</p>
        </div>
      </div>
      <div styleName="floor">
        <div styleName="item">
          <img src={phone} alt="" />
          <p> 15979285214</p>
        </div>
        <div styleName="item">
          <img src={email} alt="" />
          <p>1545608300@qq.com</p>
        </div>
      </div>
    </div>
  );
}

export default BaseInfo;
