/*
 * @Description:
 * @Author: kuan
 * @LastEditors: kuan
 * @Date: 2021-06-30 10:34:17
 * @LastEditTime: 2021-06-30 17:09:52
 */
import React from 'react';
import store from '@src/store';
import { Provider } from 'react-redux';
import Setting from './index';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <Provider store={store}>
      <Setting />
    </Provider>
  );
}
const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(<App />);
