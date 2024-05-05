import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    isLogin: boolean
    accessToken: string
    refreshToken: string
}

const initialState: AuthState = {
    isLogin: false,
    accessToken: "",
    refreshToken: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true
        },
        addAuthToken: (state, action) => {
            state.accessToken = action.payload,
            localStorage.setItem('accessToken', action.payload)
        },
        addRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        }
    },
})

export const { login, addAuthToken, addRefreshToken} = authSlice.actions