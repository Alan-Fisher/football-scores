import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from './App'
import 'locale/i18n'
import reportWebVitals from './reportWebVitals'

const {
  REACT_APP_BASE_URL, REACT_APP_API_KEY, REACT_APP_API_SECRET,
} = process.env

if (!REACT_APP_BASE_URL || !REACT_APP_API_KEY || !REACT_APP_API_SECRET) {
  throw new Error('One of the essential variables missing in .env file. Check .env.example')
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()
