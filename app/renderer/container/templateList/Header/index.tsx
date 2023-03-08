import React from 'react';
import './index.less';
import { useNavigate } from 'react-router';
import { compilePath } from '@src/common/utils/router';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

function Header() {
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  const navigate = useNavigate();
  const goBack = () => navigate(compilePath('/'));
  return (
    <div styleName="header" style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}>
      <div styleName="back" onClick={goBack}>
        返回
      </div>
      <p styleName="title">简历模版仓库</p>
    </div>
  );
}
export default Header;
