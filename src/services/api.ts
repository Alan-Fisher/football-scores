import axios from 'axios'

const { REACT_APP_BASE_URL, REACT_APP_API_KEY, REACT_APP_API_SECRET } = process.env

const apiClient = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  params: { key: REACT_APP_API_KEY, secret: REACT_APP_API_SECRET },
})

export const get = (url: string, params = {}) => apiClient.get(url, { params })
