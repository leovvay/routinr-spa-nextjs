import { configureStore } from '@reduxjs/toolkit';

import { stripeApi } from './services/stripe';
import { settingsApi } from './services/settings';
import { membershipsApi } from './services/membership';
import { postsApi } from './services/posts';
import { userApi } from './services/users';
import { notificationsApi } from './services/notifications';
import { categoriesApi } from './services/categories';
import { commonApi } from './services/common';
import { routinesApi } from './services/routines';
import { planApi } from './services/plan';
import { purchasesApi } from './services/purchases';
import redirectTargetSlice from './services/redirect';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [membershipsApi.reducerPath]: membershipsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commonApi.reducerPath]: commonApi.reducer,
    [routinesApi.reducerPath]: routinesApi.reducer,
    [planApi.reducerPath]: planApi.reducer,
    [purchasesApi.reducerPath]: purchasesApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [stripeApi.reducerPath]: stripeApi.reducer,
    [redirectTargetSlice.name]: redirectTargetSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      notificationsApi.middleware,
      categoriesApi.middleware,
      membershipsApi.middleware,
      postsApi.middleware,
      commonApi.middleware,
      routinesApi.middleware,
      planApi.middleware,
      purchasesApi.middleware,
      settingsApi.middleware,
      stripeApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
