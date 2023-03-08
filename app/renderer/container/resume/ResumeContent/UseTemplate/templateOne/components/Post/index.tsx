/**
 * @desc 在校经历
 * @author ali
 */
import './index.less';
import React from 'react';
import { useAppSelector } from '@src/store/hooks';

function Post() {
  const schoolExperience: TSResume.SchoolExperience[] = useAppSelector((state) => state.resume.schoolExperience);
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        {!!schoolExperience?.length &&
          schoolExperience?.map((experience: TSResume.SchoolExperience, index: number) => {
            return (
              <li styleName="flex" key={index}>
                <div styleName="left">
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                  <p>{experience?.post}</p>
                </div>
                <div styleName="right">
                  <p>{experience?.department}</p>
                  <p>{experience?.content}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Post;
