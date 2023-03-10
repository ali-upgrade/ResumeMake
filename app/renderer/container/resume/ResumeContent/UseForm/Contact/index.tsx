/**
 * @description 联系方式Form
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
function Contact({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const contact: TSResume.Contact = useAppSelector((state) => state.resume.contact);
  return (
    <AliModal.Dialog
      title="联系方式"
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
            <span styleName="require">*</span>电 话 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook<string>('contact/phone', e.target.value);
              }}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>邮 箱 ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook<string>('contact/email', e.target.value);
              }}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook<string>('contact/github', e.target.value);
              }}
              value={contact?.github || ''}
              placeholder="Github 地址"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div styleName="right">
            <AliInput
              onChange={(e) => {
                updateResumeHook<string>('contact/juejin', e.target.value);
              }}
              value={contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </AliModal.Dialog>
  );
}

export default Contact;
