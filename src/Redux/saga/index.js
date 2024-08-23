import { all } from 'redux-saga/effects'
import dataSaga from './dataSaga'

export default function* rootSaga(action) {
  yield all([
    dataSaga(action),
  ])
}