// Based on https://github.com/vercel/next.js/blob/canary/examples/with-redux/store.js
//          https://github.com/vercel/next.js/blob/canary/examples/with-redux-persist/store.js
import { useMemo } from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import drawer_status from './reducers/drawer';

let store;

const initial_state = {};

const combinedReducers = combineReducers({
  drawer_status
});

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

function initStore(preloaded_state = initial_state) {
  return createStore(
    persistedReducer,
    preloaded_state,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloaded_state) => {
  let _store = store ?? initStore(preloaded_state);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloaded_state && store) {
    _store = initStore({
      ...store.getState(),
      ...preloaded_state
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initial_state) {
  const store = useMemo(() => initializeStore(initial_state), [initial_state]);

  return store;
}
