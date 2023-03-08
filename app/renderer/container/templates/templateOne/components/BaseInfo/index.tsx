/**
 * @desc 基本信息
 * @author ali
 */
import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：内蒙古民族大学</li>
        <li>专业：计算机科学与技术</li>
        <li>学历：本科</li>
        <li>学年：2019.09 - 2023.06</li>
        <li>籍贯：江西~萍乡</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
