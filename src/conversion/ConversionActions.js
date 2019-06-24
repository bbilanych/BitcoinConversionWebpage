import {conversionActionTypes} from './ConversionConstants';

export function getBitcoinDataRequest() {
  return {
    type: conversionActionTypes.GET_BITCOIN_DATA_REQUEST,
  };
}

export function getBitcoinDataSuccess(response) {
  return {
    type: conversionActionTypes.GET_BITCOIN_DATA_SUCCESS,
    payload: {
      response
    }
  };
}

export function getBitcoinDataError(error) {
  return {
    type: conversionActionTypes.GET_BITCOIN_DATA_ERROR,
    payload: {
      error
    }
  };
}
