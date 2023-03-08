/**
 * @desc 技能
 * @author ali
 */
import { useAppSelector } from '@src/store/hooks';
import React from 'react';
import './index.less';

function Skill() {
  const skillList: string[] = useAppSelector((state) => state.resume.skillList);

  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        {skillList?.length > 0 &&
          skillList?.map((skill: string, index: number) => {
            return (
              <li styleName="item" key={index}>
                {skill}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Skill;
