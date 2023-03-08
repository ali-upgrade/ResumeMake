/**
 * @description 制作简历-操作区
 */
import React, { useState } from 'react';
import './index.less';
import { useNavigate, useParams } from 'react-router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import AliButton from '@common/components/AliButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useAppSelector } from '@src/store/hooks';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
import { getAppPath } from '@src/common/utils/appPath';
import fileAction from '@src/common/utils/file';
import { intToDateString } from '@src/common/utils/time';
import { createUID } from '@src/common/utils';
import { compilePath } from '@src/common/utils/router';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

function ResumeAction() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const routerParams = useParams<{ fromPath: string; templateId: string; templateIndex: string }>();
  const base: TSResume.Base = useAppSelector((state) => state.resume.base);
  const work: TSResume.Work = useAppSelector((state) => state.resume.work);
  const resume = useAppSelector((state) => state.resume);
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();
  // 导出PDF，格式为：姓名+学校+岗位
  const exportPdf = () => {
    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
    setShowModal(false);
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(`${value?.resumeSavePath}\\resumeCache`);
      } else {
        // 👇 2.2 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}/resumeCache`);
          saveResumeJson(`${appPath}\\resumeCache`);
        });
      }
    });
  };

  console.log(routerParams);

  // 存储数据json
  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '_');
    const prefix = `${date}_${base?.username}_${base?.school}_${work?.job}_${createUID()}.json`;
    // 如果路径中不存在 resumeCache 文件夹，则默认创建此文件夹
    if (resumeSavePath && resumeSavePath.search('resumeCache') > -1) {
      fileAction?.write(`${resumeSavePath}\\${prefix}`, resume, 'utf8');
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}\\resumeCache`)
        .then((path) => {
          if (path) fileAction?.write(`${path}\\${prefix}`, resume, 'utf8');
        })
        .catch(() => {
          console.log('创建文件夹失败');
        });
    }
  };

  // 返回首页
  const onBack = () => {
    if (routerParams?.fromPath === ROUTER_KEY.root) {
      navigate(compilePath(ROUTER.root));
    } else if (routerParams?.fromPath === ROUTER_KEY.templateList) {
      navigate(compilePath(ROUTER.templateList));
    } else {
      console.log('here');
    }
  };
  // 导出PDF

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <AliButton
        size="middle"
        className="export-btn"
        onClick={exportPdf}
        style={{ backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor }}
      >
        导出PDF
      </AliButton>
    </div>
  );
}

export default ResumeAction;
