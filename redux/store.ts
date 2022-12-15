import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import mainReducer from './main/mainSlice';

export const _api_url = 'http://95.163.237.221:8000';

export const store = configureStore({
  reducer: {
    user: userReducer,
    main: mainReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
