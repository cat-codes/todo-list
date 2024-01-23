import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextTheme } from './components/contextTheme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextTheme>
    <App />
  </ContextTheme>,
)
