/*
 * @Description: 模版列表侧边栏
 * @Author: Ali
 * @LastEditors: Ali
 */
import React from 'react';
import './index.less';
import UseIcon from '@assets/icon/use.png';
import AliScrollBox from '@common/components/AliScrollBox';
import AliButton from '@common/components/AliButton';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { changeselectTemplate } from '@src/store/slices/templateSlices';

function Navigation() {
  const dispatch = useAppDispatch();
  const HEADER_HEIGHT = 92;
  const height = document.body.clientHeight;
  const templateList: TSTemplate.Item[] = useAppSelector((state) => state.template.templateList);
  const selectTemplate: TSTemplate.Item = useAppSelector((state) => state.template.selectTemplate);

  const onSelect = (template: TSTemplate.Item) => {
    dispatch(changeselectTemplate(template));
  };
  return (
    <div styleName="navigation">
      <AliScrollBox maxHeight={height - HEADER_HEIGHT}>
        {templateList &&
          templateList.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div styleName="template" key={template?.templateId}>
                <img styleName="cover" src={template?.templateCover} />
                <div styleName="mask">
                  {selectTemplate?.templateId === template?.templateId && <img styleName="use" src={UseIcon} />}
                  {selectTemplate?.templateId !== template?.templateId && (
                    <AliButton size="middle" className="view-btn" onClick={() => onSelect(template)}>
                      预览模版
                    </AliButton>
                  )}
                </div>
              </div>
            );
          })}
      </AliScrollBox>
    </div>
  );
}

export default Navigation;
