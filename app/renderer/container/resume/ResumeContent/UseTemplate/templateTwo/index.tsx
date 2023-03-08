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
import { useAppSelector } from '@src/store/hooks';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';

function templateThrid() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resumeToolbarKeys: string[] = useAppSelector((state) => state.toolbarKey.resumeToolbarKeys);
  return (
    <div styleName="a4-box">
      <div styleName="container" id="visPdf">
        <div styleName="header">{resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <BaseInfo />}</div>
        <div styleName="main">
          {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.education) && <Educational />}
          {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
          {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
          {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <School />}
        </div>
      </div>
    </div>
  );
}

export default templateThrid;
