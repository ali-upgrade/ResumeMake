/*
 * @Description:主题组件
 * @Author: Ali
 * @LastEditors: Ali
 */
import React from 'react';
import './index.less';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';
import { useAppSelector } from '@src/store/hooks';

function AliTheme() {
  const themeList = useAppSelector((state) => state.theme.themeList);
  const [currentTheme, setCurrentTheme] = useThemeActionHooks.useGetCurrentTheme();

  return (
    <div styleName="box">
      {themeList &&
        themeList.length > 0 &&
        [...themeList].map((t: TSTheme.Item, index: number) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: t.backgroundColor }}
              styleName={`${currentTheme?.id === t?.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentTheme && setCurrentTheme(t, true);
              }}
            />
          );
        })}
    </div>
  );
}

export default AliTheme;
