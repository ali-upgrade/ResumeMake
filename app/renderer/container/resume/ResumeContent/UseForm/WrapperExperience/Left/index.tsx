/**
 * @description 专门服务于经验弹窗左侧
 */
import React from 'react';
import './index.less';
import AliButton from '@common/components/AliButton';
import AliScrollBox from '@common/components/AliScrollBox';
import List, { IListProps } from './List';

interface IProps extends IListProps {
  onAdd: () => void;
}

function Left({ index, experienceList = [], onDelete, onAdd, onChange }: IProps) {
  return (
    <div styleName="layout-left">
      {experienceList.length > 0 && (
        <>
          <AliScrollBox maxHeight={420}>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
          </AliScrollBox>
          <div styleName="action">
            <AliButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </AliButton>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div styleName="empty">
          <div styleName="empty-tips">还没有内容，快添加一下吧～</div>
          <div styleName="empty-action">
            <AliButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </AliButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;
