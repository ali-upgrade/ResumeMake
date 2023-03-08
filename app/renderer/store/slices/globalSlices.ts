import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  appName: '简历制作平台',
};

const { reducer: globalReducer, actions: globalActions } = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeAppName: (state, action: PayloadAction<string>) => {
      state.appName = action.payload;
    },
  },
});

export const { changeAppName } = globalActions;

export default globalReducer;
