import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { apiSlice } from './api/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>

)
