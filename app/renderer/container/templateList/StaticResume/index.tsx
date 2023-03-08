/*
 * @Description:
 * @Author: Ali
 * @LastEditors: Ali
 */
import React from 'react';
import './index.less';
import * as TemplateList from '@src/container/templates';
import Footer from '../Footer';
import AliScrollBox from '@common/components/AliScrollBox';
import AliEmpty from '@common/components/AliEmpty';
import EmptyPng from '@assets/icon/empty.png';
import AliButton from '@common/components/AliButton';
import { useAppSelector } from '@src/store/hooks';

// 合法且存在的简历模版
const VALID_TEMPLATE = [0, 1, 2];

function StaticResume() {
  const HEADER_HEIGHT = 76; // 距离头部距离
  const height = document.body.clientHeight;
  const selectTemplate: TSTemplate.Item = useAppSelector((state) => state.template.selectTemplate);

  const isIncludeTemplate = VALID_TEMPLATE.includes(selectTemplate.templateIndex);
  const isValidTemplate = selectTemplate.templateId && selectTemplate.templateIndex !== -1;

  return (
    <div styleName="container">
      <AliScrollBox maxHeight={height - HEADER_HEIGHT}>
        {isValidTemplate && isIncludeTemplate && (
          <>
            {selectTemplate.templateIndex === 0 && <TemplateList.TemplateOne />}
            {selectTemplate.templateIndex === 1 && <TemplateList.TemplateTwo />}
            {selectTemplate.templateIndex === 2 && <TemplateList.TemplateThree />}
            <Footer />
          </>
        )}

        {isValidTemplate && !isIncludeTemplate && <LackDesc label="暂未开发此模版，欢迎点击下方按钮进行模版贡献" />}
        {!isValidTemplate && <LackDesc label="暂无模版数据，欢迎点击下方按钮进行模版贡献" />}
      </AliScrollBox>
    </div>
  );
}

export default StaticResume;

const LackDesc = React.memo(({ label }: { label: string }) => {
  return (
    <div styleName="empty">
      <AliEmpty imgSrc={EmptyPng} label={label} />
      <div styleName="footer">
        <AliButton
          size="middle"
          className="use-btn"
          onClick={() => {
            alert('让作者自己来');
          }}
        >
          贡献模版
        </AliButton>
      </div>
    </div>
  );
});
