/**
 * @description 项目经验Form
 */
import React from 'react';
import AliModal from '@common/components/AliModal';
import Form from './Form';
import { useSelector } from 'react-redux';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import { useAppSelector } from '@src/store/hooks';

interface IProps {
  onClose: () => void;
}
function ProjectExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const projectExperience: TSResume.ProjectExperience[] = useAppSelector((state) => state.resume.projectExperience);

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('projectExperience', newDataList);
  };

  return (
    <AliModal.Dialog
      title="项目经验"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.project(projectExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </AliModal.Dialog>
  );
}

export default ProjectExperience;
