/*
 * @Description: 读取模版静态文件目录
 * @Author: Ali
 * @LastEditors: Ali
 */
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import { createUID } from '@common/utils';
import { useAppDispatch } from '@src/store/hooks';
import { changeselectTemplate, changetemplateList } from '@src/store/slices/templateSlices';

export default function () {
  const dispatch = useAppDispatch();
  return () => {
    // 1. 先获取应用地址
    getAppPath().then((appPath: string) => {
      // 2. 从assets读取模版图片信息，构造模版列表
      fileAction
        .readDir(`${appPath}/assets/template`)
        .then(async (files: string[]) => {
          // 3. 构造模版列表
          if (files.length > 0) {
            let templateList: TSTemplate.Item[] = [];
            for (let idx = 0; idx < files.length; idx++) {
              const base64URL = await fileAction.read(`${appPath}/assets/template/${files[idx]}`, 'base64');
              templateList.push({
                templateName: files[idx],
                templateIndex: idx,
                templateId: createUID(),
                templateCover: `data:image/png;base64,${base64URL}`,
              });
            }
            // 4. 存入到 redux 中
            dispatch(changetemplateList(templateList));
            dispatch(changeselectTemplate(templateList[0]));
          }
        })
        .catch((err: NodeJS.ErrnoException) => {
          throw new Error(err.message);
        });
    });
  };
}
