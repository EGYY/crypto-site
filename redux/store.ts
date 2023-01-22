import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import mainReducer from './main/mainSlice';
import projectReducer from './project/projectSlice';
import {userApi} from './user/userApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const _api_url = 'https://zarabarahorosho.pro:8000';

export const store = configureStore({
  reducer: {
    user: userReducer,
    main: mainReducer,
    project: projectReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
