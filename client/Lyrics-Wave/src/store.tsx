import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import layoutReducer from './components/Layout/layoutSlice';
import homeReducer from './components/HomePage/homeSlice';
// ...
import ReduxLogger from "redux-logger";

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(ReduxLogger);

export const store = configureStore({
  middleware,
  reducer: {
    layout: layoutReducer,
    home: homeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;