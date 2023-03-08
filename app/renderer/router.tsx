import React, { useEffect } from 'react';
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';
import Root from './container/root';
import Resume from './container/resume';
import ROUTER from '@src/common/constants/router';
import TemplateList from './container/templateList';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
import useThemeActionHooks from './hooks/useThemeActionHooks';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const initThemeConfig = useThemeActionHooks.useInitThemeConfig();

  useEffect(() => {
    initThemeConfig();
    readDirAssetsTemplateHooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route index path={ROUTER.resume} element={<Resume />} />
        <Route path={ROUTER.root} element={<Root />} />
        <Route path={ROUTER.templateList} element={<TemplateList />} />
        <Route path="*" element={<Navigate to={ROUTER.root} replace />} />
      </Routes>
      {/* <Navigate to="/" /> */}
    </HashRouter>
  );
}

export default Router;
