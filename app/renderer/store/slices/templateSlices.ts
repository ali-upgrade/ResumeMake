import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TStore {
  /**
   * @description 选中工具条模块的keys
   */
  resumeToolbarKeys: string[];
  /**
   * @description 模块列表
   */
  templateList: TSTemplate.Item[];
  /**
   * @description 当前选中的模版
   */
  selectTemplate: TSTemplate.Item;
}

const initialState: TStore = {
  resumeToolbarKeys: [],
  templateList: [],
  selectTemplate: {
    templateId: '',
    templateName: '',
    templateCover: '',
    templateIndex: 0,
  },
};

const { reducer: templateReducer, actions: templateActions } = createSlice({
  name: 'template',
  initialState,
  reducers: {
    changeselectTemplate: (state, action: PayloadAction<TSTemplate.Item>) => {
      state.selectTemplate = action.payload;
    },
    changetemplateList: (state, action: PayloadAction<TSTemplate.Item[]>) => {
      state.templateList = action.payload;
    },
  },
});

export const { changeselectTemplate, changetemplateList } = templateActions;

export default templateReducer;
