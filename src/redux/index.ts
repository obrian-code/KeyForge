import { configureStore } from '@reduxjs/toolkit';
import passwordConfigReducer from '../reducers/index';

const store = configureStore({
  reducer: {
    passwordConfig: passwordConfigReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
