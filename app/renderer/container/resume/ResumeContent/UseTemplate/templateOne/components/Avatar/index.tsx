/**
 * @desc 头像
 * @author ali
 */
import React from 'react';
import './index.less';
import uploadIcon from '@assets/icon/upload.png';
import AliButton from '@common/components/AliButton';
import ImageUpload from '@common/components/AliUpload/ImageUpload';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import { useAppSelector } from '@src/store/hooks';

function Avatar() {
  const base: TSResume.Base = useAppSelector((state) => state.resume.base);
  const updateResumeHook = useUpdateResumeHook();

  const onUpdateUserAvatar = (avatarUrl: string) => {
    updateResumeHook<string>('base/avatar', avatarUrl);
  };

  return (
    <div styleName="box">
      {!base?.avatar && (
        <ImageUpload
          icon={uploadIcon}
          accept="image/*"
          multiple={false}
          onAfterChange={(files: TSUpload.File[]) => {
            onUpdateUserAvatar(files[0]?.base64URL);
          }}
        />
      )}
      {base?.avatar && (
        <div styleName="avatar">
          <img src={base?.avatar} />
          <div styleName="mask">
            <AliButton size="small" className="btn-change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </AliButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
