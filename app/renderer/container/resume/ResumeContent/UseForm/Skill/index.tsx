/**
 * @description 技能清单Form
 */
import React from 'react';
import './index.less';
import AliModal from '@common/components/AliModal';
import AliInput from '@common/components/AliInput';
import RecommendSkill, { IRecommendSkill } from '@common/constants/skill';
import { useAppSelector } from '@src/store/hooks';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}
function Skill({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const skillold: string = useAppSelector((state) => state.resume.skill);
  return (
    <AliModal.Dialog
      title="个人信息"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            技 能 ：
          </div>
          <div styleName="right">
            <div styleName="action">
              {RecommendSkill.map((skill: IRecommendSkill) => {
                return (
                  <div
                    styleName="label"
                    key={skill.uid}
                    style={{
                      color: skill?.styles?.font,
                      borderColor: skill?.styles?.font,
                      backgroundColor: skill?.styles?.bg,
                    }}
                    onClick={() => {
                      const value = `${skill ? '|' : ''}${skill.label}`;
                      const valueold = `${skillold}${value}`;
                      updateResumeHook('skill', valueold);
                    }}
                  >
                    {skill.label}
                  </div>
                );
              })}
            </div>
            <AliInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook('skill', e.target.value);
              }}
              rows={5}
              value={skillold}
              placeholder="例如 Vue、React"
              allowClear={true}
            />
            <div styleName="tips"> * 多个技能以 | 分割</div>
          </div>
        </div>
      </div>
    </AliModal.Dialog>
  );
}

export default Skill;
