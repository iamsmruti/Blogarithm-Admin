// id: "",
// first_name: "",
// last_name: "",
// email: "smrutiranjanbadatya3@gmail.com",
// password: "$2b$10$ut1.O2COMKvchOFlTjbZEeJS5sQTg9AJgSS7QewBiVJ4HIzdTcfKW",
// profile_img: "",
// is_author: true,
// is_admin: true,
// github: "",
// instagram: "",
// linkedin: "",
// twitter: "",
// createdAt: "2022-06-01T16:23:46.321Z",
// updatedAt: "2022-06-01T16:23:46.321Z"

import { createSlice } from '@reduxjs/toolkit'

export const userData = createSlice({
    name: 'user',
    initialState: {
        loggedUser: localStorage.getItem('logged-user'),
        all: null
    },
    reducers: {
        loggedUserData: (state, action) => {
            state.loggedUser = action.payload
            localStorage.setItem('logged-user', action.payload.user)
        },
        allUsers: (state, action) => {
            state.all = action.payload
        }
    }
})

export const { loggedUserData, allUsers } = userData.actions

export const userStore = (state) => state.user

export default userData.reducer