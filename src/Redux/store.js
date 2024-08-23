import {legacy_createStore as createStore,applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;