import { fork } from 'redux-saga/effects';
import * as conversionSagas from './conversion/ConversionSaga';

export default function* rootSaga(store) {
  yield fork(conversionSagas.watchGetBitcoinDatasRequest, store)
}
