/**
 * @description 工作期望Form
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
function Work({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const work: TSResume.Work = useAppSelector((state) => state.resume.work);
  return (
    <AliModal.Dialog
      title="工作期望"
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
            <span styleName="require">*</span>职 位 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook<string>('work/job', e.target.value);
              }}
              value={work?.job || ''}
              placeholder="求职岗位"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>城 市 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook<string>('work/city', e.target.value);
              }}
              value={work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear={true}
            />
            <div styleName="tips"> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </AliModal.Dialog>
  );
}

export default Work;
