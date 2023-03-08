import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  changeBase,
  changeContact,
  changeHobby,
  changeSkill,
  changeWork,
  changeEvaluation,
  changeEvaluationList,
  changeCertificateList,
  changeSkillList,
  changeSchoolExperience,
  changeprojectExperience,
  changeworkExperience,
} from '@src/store/slices/resumeSlices';
import { AdapterExperienceType } from './UseForm/WrapperExperience/adapter';

/**
 * @description 更新简历信息
 * @param {string[]} stateKey 关键key，如路径为 [base/username] 表示修改 base 对象下的 username
 * @param {string} stateValue
 */
function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook();
  const updateContactHook = useUpdateContactHook();
  const updateWorkHook = useUpdateWorkHook();
  const updateEvaluationHook = useUpdateEvaluationHook();
  const updateHobbyHook = useUpdateHobbyHook();
  const updateCertificateHook = useUpdateCertificateHook();
  const updateSkillHook = useUpdateSkillHook();
  const updateProjectExperience = useUpdateProjectExperience();
  const updateSchoolExperience = useUpdateSchoolExperience();
  const updateWorkExperience = useUpdateWorkExperience();

  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[0]) {
      if (keys[0] === 'base') updatePersonalHook(keys[1], stateValue);
      if (keys[0] === 'contact') updateContactHook(keys[1], stateValue);
      if (keys[0] === 'work') updateWorkHook(keys[1], stateValue);
      if (keys[0] === 'evaluation') updateEvaluationHook(keys[0], stateValue);
      if (keys[0] === 'hobby') updateHobbyHook(keys[0], stateValue);
      if (keys[0] === 'certificate') updateCertificateHook(keys[0], stateValue);
      if (keys[0] === 'skill') updateSkillHook(keys[0], stateValue);
      if (keys[0] === 'projectExperience') updateProjectExperience(keys[0], stateValue);
      if (keys[0] === 'schoolExperience') updateSchoolExperience(keys[0], stateValue);
      if (keys[0] === 'workExperience') updateWorkExperience(keys[0], stateValue);
    }
  };
}

/**
 * @description 修改个人信息（base）
 */
function useUpdatePersonalHook() {
  const dispatch = useAppDispatch();
  const base: TSResume.Base = useAppSelector((state: any) => state.resume.base);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(
      changeBase({
        ...base,
        [stateKey]: stateValue,
      })
    );
  };
}

/**
 * @description 修改联系方式（contact）
 */
function useUpdateContactHook() {
  const dispatch = useAppDispatch();
  const contact: TSResume.Contact = useAppSelector((state) => state.resume.contact);

  return <T>(stateKey: string, stateValue: T) => {
    dispatch(
      changeContact({
        ...contact,
        [stateKey]: stateValue,
      })
    );
  };
}

/**
 * @description 修改工作期望（work）
 */
function useUpdateWorkHook() {
  const dispatch = useAppDispatch();
  const work: TSResume.Work = useAppSelector((state) => state.resume.work);

  return <T>(stateKey: string, stateValue: T) => {
    let cityList = work?.cityList ? [...work.cityList] : [];
    if (stateKey === 'city') {
      cityList = (stateValue as any).split('|');
    }
    dispatch(
      changeWork({
        ...work,
        cityList,
        [stateKey]: stateValue,
      })
    );
  };
}

/**
 * @description 修改个人评价（evaluation）
 */
function useUpdateEvaluationHook() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let evaluationList = stateValue ? (stateValue as any).split('|') : [];
    dispatch(changeEvaluation(stateValue));
    dispatch(changeEvaluationList([...evaluationList]));
  };
}

/**
 * @description 修改个人特长爱好（hobby）
 */
function useUpdateHobbyHook() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    dispatch(
      changeHobby({
        [stateKey]: stateValue,
      })
    );
  };
}

/**
 * @description 修改荣誉证书（certificate）
 */
function useUpdateCertificateHook() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let certificateList = stateValue ? (stateValue as any).split('|') : [];
    dispatch(changeCertificateList([...certificateList]));
  };
}

/**
 * @description 修改技能清单（skill）
 */
function useUpdateSkillHook() {
  const dispatch = useAppDispatch();
  // const skill: string[] = useAppSelector((state) => state.resume.skillList);
  return <T>(stateKey: string, stateValue: T) => {
    let skillList = stateValue ? (stateValue as any).split('|') : [];

    dispatch(changeSkillList([...skillList]));
    dispatch(changeSkill(stateValue));
  };
}

/**
 * @description 修改项目经验（Project）
 */
function useUpdateProjectExperience() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      let parseContent = s.content ? s.content.split('|') : [];
      return {
        ...s,
        projectName: s?.title,
        parseContent,
      };
    });
    console.log('项目经验', newList);
    dispatch(changeprojectExperience([...newList]));
  };
}

/**
 * @description 修改在校经历（School）
 */
function useUpdateSchoolExperience() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      let parseContent = s.content ? s.content.split('|') : [];
      return {
        ...s,
        department: s?.title,
        parseContent,
      };
    });
    console.log('校园经历', newList);

    dispatch(changeSchoolExperience([...newList]));
  };
}

/**
 * @description 修改在校经历（School）
 */
function useUpdateWorkExperience() {
  const dispatch = useAppDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      let parseContent = s.content ? s.content.split('|') : [];
      return {
        ...s,
        department: s?.title,
        parseContent,
      };
    });
    console.log('工作经历', newList);

    dispatch(changeworkExperience([...newList]));
  };
}

export default useUpdateResumeHook;
