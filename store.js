import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import { reducers } from './src/reducers';

const middleWare = [ReduxThunk];
// const store = createStore(reducers, compose(applyMiddleware(thunk)));
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(...middleWare))
);

let persistor = persistStore(store);

export default store;
