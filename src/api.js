import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:4000/'
})

export const setJwt = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


