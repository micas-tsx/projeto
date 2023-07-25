import { persistStore } from 'redux-persist'
import { legacy_createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import persistedReducers from './modules/example/reduxPersist'

import rootReducer from './modules/example/rootReducer'
import rootSaga from './modules/example/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = legacy_createStore(
    persistedReducers(rootReducer), 
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store;