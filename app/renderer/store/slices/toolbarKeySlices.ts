import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TSResume.resumeToolbarKey = {
  resumeToolbarKeys: [],
};

const { reducer: toolbarKeyReducer, actions: toolbarKeyActions } = createSlice({
  name: 'toolbarKey',
  initialState,
  reducers: {
    changeToolbarKeys: (state, action: PayloadAction<string[]>) => {
      state.resumeToolbarKeys = action.payload;
    },
  },
});

export const { changeToolbarKeys } = toolbarKeyActions;

export default toolbarKeyReducer;
