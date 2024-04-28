import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    isLogin: boolean
    accessToken: Token
    refreshToken: Token
}

interface Token{
    isPresent: boolean
    token: string
}

const initialState: AuthState = {
    isLogin: false,
    accessToken: {
        isPresent: false,
        token: ""
    },
    refreshToken: {
        isPresent: false,
        token: ""
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true
        },

    },
})

export const { login } = authSlice.actions