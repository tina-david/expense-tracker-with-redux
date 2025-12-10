import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import { ExpenseProvider } from './context/ExpenseContext.jsx'
// import AppRouter from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
