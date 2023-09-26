import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
    ...(localStorage.getItem('token') && ({headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}}))
})