import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/userAuth'
import userReducer from '../features/userData'
import postReducer from '../features/postData'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      user: userReducer,
      post: postReducer
  },
})