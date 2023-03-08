/**
 * @desc 模板1
 * @author ali
 */
import React from 'react';
import './index.less';
import BaseInfo from './BaseInfo';
import Educational from './Educational';
import Skill from './Skill';
import Work from './Work';
import Project from './Project';
import School from './School';

function TemplateTwo() {
  return (
    <div styleName="container">
      <div styleName="header">
        <BaseInfo />
      </div>
      <div styleName="main">
        <Educational />
        <Skill />
        <Work />
        <Project />
        <School />
      </div>
    </div>
  );
}

export default TemplateTwo;
