/**
 * @description 教育信息Form
 */
import React from 'react';
import './index.less';
import AliModal from '@common/components/AliModal';
import AliInput from '@common/components/AliInput';
import { useAppSelector } from '@src/store/hooks';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}
function Education({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const base: TSResume.Base = useAppSelector((state) => state.resume.base);
  return (
    <AliModal.Dialog
      title="教育信息"
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
            <span styleName="require">*</span>学 校 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook('base/school', e.target?.value || '');
              }}
              value={base?.school || ''}
              placeholder="请输入贵校"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>专 业 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook('base/major', e.target?.value || '');
              }}
              value={base?.major || ''}
              placeholder="请输入专业"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学 位 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook('base/degree', e.target?.value || '');
              }}
              value={base?.degree || ''}
              placeholder="学士？硕士？博士？"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学 年 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  beginTime: e.target.value,
                };
                updateResumeHook<object>('base/onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.beginTime || ''}
              placeholder="2015.09.01"
              allowClear={true}
              style={{ width: 300 }}
            />
            <span styleName="line">-</span>
            <AliInput
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  endTime: e.target.value,
                };
                updateResumeHook<object>('base/onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.endTime || ''}
              placeholder="2015.06.30"
              style={{ width: 300 }}
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </AliModal.Dialog>
  );
}

export default Education;
