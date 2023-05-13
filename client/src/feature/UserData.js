import { createSlice } from '@reduxjs/toolkit'

export const userData = createSlice({
  name: 'user',
  initialState: {
    name: "null",
    email:"null",
    id:0,

  },
  reducers: {
    Name: (state,action) => {
      state.name = action.payload;
    },
    Email: (state,action) =>  {
      state.email = action.payload;
    },
    ID: (state, action) => {
      state.id = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { Name, Email, ID } = userData.actions

export default userData.reducer