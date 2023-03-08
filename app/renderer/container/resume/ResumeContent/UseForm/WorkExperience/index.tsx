/**
 * @description 工作经历Form
 */
import React from 'react';
import AliModal from '@common/components/AliModal';
import Form from './Form';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import { useAppSelector } from '@src/store/hooks';

interface IProps {
  onClose: () => void;
}
function WorkExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const workExperience: TSResume.WorkExperience[] = useAppSelector((state) => state.resume.workExperience);
  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('workExperience', newDataList);
  };

  return (
    <AliModal.Dialog
      title="工作经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.work(workExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </AliModal.Dialog>
  );
}

export default WorkExperience;
