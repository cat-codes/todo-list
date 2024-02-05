import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import { ListProvider } from './components/ListProvider.jsx'
import Background from './components/Background.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </ThemeProvider>
  </React.StrictMode>
)