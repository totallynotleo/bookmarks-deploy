import React, { useState, useEffect } from 'react'
import { api, setJwt } from '../api';
import { decodeJwt } from 'jwt-decode'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(null)

    const login = async (email, password) => {
        const result = await api.post('/auth/login', { email, password })
        await setToken(result.data.token)
        setJwt(result.data.token)
    }

    const logout = () => {
        api.get('/auth/logout').then(() => {
            setToken(null)
        })
    }

    const getTokenDetails = () => {
        return decodeJwt(token)
    }

    useEffect(() => {
        console.log(token)
    })

    return (
        <AuthContext.Provider value={{ getTokenDetails, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
