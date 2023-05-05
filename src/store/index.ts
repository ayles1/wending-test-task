import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cashReducer from './cashSlice/cash.slice';
import wendingReducer from './wendingSlice/wending.slice';

const rootReducer = combineReducers({
    wending: wendingReducer,
    cash: cashReducer
});

const store = configureStore({
    reducer: rootReducer
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
