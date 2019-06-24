import { takeEvery, PutEffect } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import { conversionActionTypes } from './ConversionConstants';
import * as conversionActions from './ConversionActions';
import  ba from  'bitcoinaverage';

const publicKey = 'ZmQ0YjUxOTNhNjhhNDFjOThhMDUxYzkzMzdmMjM2NzU';
const secretKey = 'Y2Y2N2RlODdlZmRhNDEyMTllMTZhMjJkZDAzYWI1MGQ4MjA4MzIyZWNlOTA0NDhlYTQ3ZDE0Mzg5NTYzNzJhZQ';
const restClient = ba.restfulClient(publicKey, secretKey);
let responseBit;

export function* watchGetBitcoinDatasRequest() {
  yield takeEvery(conversionActionTypes.GET_BITCOIN_DATA_REQUEST, handleGetBitcoinDataRequest);
}

export function* handleGetBitcoinDataRequest() {
  try {
    const a = yield restClient.perExchangeData('bitstamp',
      function(response){
      console.log(response)
        responseBit = response
        //PutEffect(conversionActions.getBitcoinDataSuccess(response));
      },
      function(err){
       // yield put(conversionActions.getBitcoinDataError(err));
      });
console.log(responseBit)
  } catch(e) {
    yield put(conversionActions.getBitcoinDataError(e));
  }
}
