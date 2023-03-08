/*
 * @Description:
 * @Author: Ali
 * @LastEditors: Ali
 */
import React from 'react';
import './index.less';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import AliRectSize from '@common/components/AliRectSize';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <AliRectSize>
          <AliRectSize.Left>
            <Navigation />
          </AliRectSize.Left>
          <AliRectSize.Right>
            <StaticResume />
          </AliRectSize.Right>
        </AliRectSize>
      </div>
    </div>
  );
}
export default TemplateList;
