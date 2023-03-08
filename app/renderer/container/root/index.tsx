import React from 'react';
import { useNavigate } from 'react-router';
import './index.less';
import { shell } from 'electron';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { compilePath, isHttpOrHttpsUrl } from '@common/utils/router';
import Logo from '@assets/logo.png';
import AliTheme from '@src/common/components/AliTheme';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';
import { useAppSelector } from '@src/store/hooks';

function Root() {
  const navigate = useNavigate();
  const selectTemplate: TSTemplate.Item = useAppSelector((state) => state.template.selectTemplate);
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      navigate(
        compilePath(router.url, {
          fromPath: ROUTER_KEY.root,
          templateId: selectTemplate?.templateId,
          templateIndex: selectTemplate?.templateIndex,
        })
      );
    }
  };
  return (
    <div styleName="root" style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}>
      <div styleName="container">
        <div styleName="theme">
          {/* 111111 */}
          <AliTheme />
        </div>
        <img alt="" src={Logo} />
        <div styleName="title">ResumeMake</div>
        <div styleName="tips">一个简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2021-{new Date().getFullYear()} All Rights Reserved. Copyright By ali-upgrade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
