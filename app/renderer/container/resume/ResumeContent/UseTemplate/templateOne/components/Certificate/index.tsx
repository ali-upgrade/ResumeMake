/**
 * @desc 荣誉奖励
 * @author ali
 */
import { useAppSelector } from '@src/store/hooks';
import React from 'react';
import '../../../styles/template-one.less';

function Certificate() {
  const certificateList: string[] = useAppSelector((state) => state.resume.certificateList);
  return (
    <div styleName="container">
      <p styleName="title">荣誉奖励 Certificate</p>
      <ul styleName="content">
        {certificateList.length > 0 &&
          certificateList?.map((value: string, index: number) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
    </div>
  );
}

export default Certificate;
