/*
 * @Description:
 * @Author: Ali
 * @LastEditors: Ali
 */
import React from 'react';
import './index.less';
// import { useNavigate } from 'react-router';
// import { useSelector } from 'react-redux';
// import { ROUTER_KEY } from '@common/constants/router';
import { compilePath } from '@common/utils/router';
import AliButton from '@common/components/AliButton';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@src/store/hooks';

function Footer() {
  const navigate = useNavigate();
  const selectTemplate = useAppSelector((state) => state.template.selectTemplate);

  const onMadeResume = () => {
    navigate(
      compilePath(ROUTER.resume, {
        fromPath: ROUTER_KEY.templateList,
        templateId: selectTemplate?.templateId,
        templateIndex: selectTemplate?.templateIndex,
      })
    );
  };
  return (
    <div styleName="footer">
      <AliButton size="middle" className="use-btn" onClick={onMadeResume}>
        以此模版前往制作简历
      </AliButton>
    </div>
  );
}

export default Footer;
