import { configureStore } from '@reduxjs/toolkit'
import UserData from '../feature/UserData'

export default configureStore({
  reducer: {
    user:UserData
  }
})