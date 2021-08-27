import React from 'react';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { reducers } from './src/reducers';
import useStore from './store';

export default function App() {
  // const store = createStore(reducers, compose(applyMiddleware(thunk)));
  // const { store, persistor } = useStore();
  return (
    <Provider store={useStore}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Navigation />
      {/* </PersistGate> */}
    </Provider>
  );
}
