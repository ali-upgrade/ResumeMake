/**
 * @desc 在校经历
 * @author ali
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2021.09-2022.09</p>
            <p>技术部部长</p>
          </div>
          <div styleName="right">
            <p>校团委学生会</p>
            <p>
              计划、组织、协调各年级学生组织的文艺和文化娱乐活动，承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目
            </p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2017.09-2019.04</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>创新创业学院享e校团队</p>
            <p>
              担任享e校团队前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用，任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与内蒙古xxx科技有限公司合作，主导开发该公司官网及后台管理
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
