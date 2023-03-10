/**
 * @desc 求职意向
 * @author ali
 */
import { useAppSelector } from '@src/store/hooks';
import React from 'react';
import '../../../styles/template-one.less';
import './index.less';

function Job() {
  const work: TSResume.Work = useAppSelector((state) => state.resume.work);
  const cityList = (work && work?.cityList) || [];
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        {work?.job && <li>职位：{work?.job}</li>}
        {work?.city && cityList?.length > 0 && (
          <li>
            城市：
            {cityList?.map((city: string, index: number) => {
              return (
                <span key={index}>
                  {city}
                  {cityList.length - 1 !== index && <span styleName="line">|</span>}
                </span>
              );
            })}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Job;
