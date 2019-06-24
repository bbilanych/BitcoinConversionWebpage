import {headerActionTypes} from './HeaderConstants';

const initialState = {
  actualRoute: '',
  modalOpen: true,
};

export default function headerReducer(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {

    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        actualRoute: payload.pathname,
      };

    case headerActionTypes.ON_MODAL_STATE_CHANGE:
      return {
        ...state,
        modalOpen: payload.isOpen,
      };

    default:
      return state;
  }
}
