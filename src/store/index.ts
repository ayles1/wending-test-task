import { combineReducers, configureStore } from '@reduxjs/toolkit';

import wendingReducer from './wendingSlice/wending.slice';

const rootReducer = combineReducers({
    wending: wendingReducer
});

const store = configureStore({
    reducer: rootReducer
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
