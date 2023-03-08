/**
 * @desc 简单介绍
 * @author ali
 */
import React from 'react';
import './index.less';
import { useAppSelector } from '@src/store/hooks';
function Synopsis() {
  const base: TSResume.Base = useAppSelector((state) => state.resume.base);
  const work: TSResume.Work = useAppSelector((state) => state.resume.work);
  const evaluation: string = useAppSelector((state) => state.resume.evaluation);
  const evaluationList: string[] = useAppSelector((state) => state.resume.evaluationList);

  return (
    <div styleName="content">
      {base?.username && <p styleName="name">{base?.username}</p>}
      {work?.job && <p styleName="job">{work?.job}</p>}
      {evaluation && <p styleName="summary">{evaluationList?.join('，')}</p>}
    </div>
  );
}

export default Synopsis;
