import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TStore {
  /**
   * @description 主题列表
   */
  themeList: TSTheme.Item[];
  /**
   * @description 当前选中的主题
   */
  currentTheme: TSTheme.Item;
}

const initialState: TStore = {
  themeList: [],
  currentTheme: {
    id: '',
    fontColor: '',
    backgroundColor: '',
  },
};

const { reducer: themeReducer, actions: themeActions } = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // changeAppName: (state, action: PayloadAction<string>) => {
    //   state.appName = action.payload;
    // },
    changeCurrentTheme: (state, action: PayloadAction<TSTheme.Item>) => {
      state.currentTheme = action.payload;
    },
    changethemeList: (state, action: PayloadAction<TSTheme.Item[]>) => {
      state.themeList = action.payload;
    },
  },
});

export const { changeCurrentTheme, changethemeList } = themeActions;

export default themeReducer;
