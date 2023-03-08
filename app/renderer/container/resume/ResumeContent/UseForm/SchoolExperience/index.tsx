/**
 * @description 在校经历Form
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
function SchoolExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const schoolExperience: TSResume.SchoolExperience[] = useAppSelector((state) => state.resume.schoolExperience);

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('schoolExperience', newDataList);
  };

  return (
    <AliModal.Dialog
      title="在校经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.school(schoolExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </AliModal.Dialog>
  );
}

export default SchoolExperience;
