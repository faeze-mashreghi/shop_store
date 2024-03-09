import { combineReducers, configureStore } from '@reduxjs/toolkit';
import purchaseReducer from './features/pruchaseSlice';

const rootReducer = combineReducers({
  purchase: purchaseReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
