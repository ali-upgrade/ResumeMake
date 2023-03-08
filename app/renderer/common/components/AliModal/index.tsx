/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import AliModal from '@components/AliModal';
 * <AliModal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/AliModal';
 * <Confirm />
 */
import AliDialog from './AliDialog';
import AliConfirm from './AliConfirm';

export const Dialog = AliDialog;
export const Confirm = AliConfirm;

export default {
  Dialog: AliDialog,
  Confirm: AliConfirm,
};
