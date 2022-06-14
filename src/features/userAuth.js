import { createSlice } from '@reduxjs/toolkit'

export const userAuth = createSlice({
    name: 'auth',
    initialState : {
        isAdmin: localStorage.getItem('isAdmin'),
        isAuthor: localStorage.getItem('isAuthor'),
        token: localStorage.getItem('auth-token'),
        email: localStorage.getItem('email'),
    },
    reducers: {
        login: (state, action) => {
            state.isAdmin = action.payload.isAdmin
            state.isAuthor = action.payload.isAuthor
            state.email = action.payload.email
            state.token = action.payload.token
            localStorage.setItem('auth-token', action.payload.token)
            localStorage.setItem('isAuthor', action.payload.isAuthor)
            localStorage.setItem('isAdmin', action.payload.isAdmin)
            localStorage.setItem('email', action.payload.email)
        },
        logout: (state) => {
            state.isAuthor = false
            state.isAdmin = false
            state.email = ''
            state.token = ''
            localStorage.removeItem('auth-token')
            localStorage.removeItem('isAuthor')
            localStorage.removeItem('isAdmin')
            localStorage.removeItem('email')
        }
    }
})

export const { login , logout} = userAuth.actions

export const userState = (state) => state.auth

export default userAuth.reducer