import { configureStore } from '@reduxjs/toolkit';
import globaReducer from './slices/globalSlices';
import resumeReducer from './slices/resumeSlices';
import toolbarKeyReducer from './slices/toolbarKeySlices';
import templateReducer from './slices/templateSlices';
import themeReducer from './slices/themeSlices';
const store = configureStore({
  reducer: {
    global: globaReducer,
    resume: resumeReducer,
    toolbarKey: toolbarKeyReducer,
    template: templateReducer,
    theme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
