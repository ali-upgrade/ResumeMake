/**
 * @description 个人信息Form
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
function Personal({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const hobby: string = useAppSelector((state) => state.resume.hobby);
  const base: TSResume.Base = useAppSelector((state) => state.resume.base);
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
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook('base/username', e.target?.value || '');
              }}
              value={base?.username || ''}
              placeholder="请输入姓名"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍 贯 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook('base/hometown', e.target?.value || '');
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            爱 好 ：
          </div>
          <div styleName="right">
            <AliInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook('hobby', e.target?.value || '');
              }}
              rows={5}
              value={hobby || ''}
              placeholder="你有什么特长爱好呢"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </AliModal.Dialog>
  );
}

export default Personal;
