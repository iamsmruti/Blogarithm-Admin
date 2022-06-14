import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        post : null
    },
    reducers: {
        setData: (state, action) => {
            state.post = action.payload
        }
    }
})

export const {  setData } = postSlice.actions

export const postStore = (state) => state.post

export default postSlice.reducer