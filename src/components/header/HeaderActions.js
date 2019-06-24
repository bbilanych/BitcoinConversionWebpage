import {headerActionTypes} from './HeaderConstants';

export function onModalStateChange(isOpen) {
  return {
    type: headerActionTypes.ON_MODAL_STATE_CHANGE,
    payload: {
      isOpen,
    },
  };
}
