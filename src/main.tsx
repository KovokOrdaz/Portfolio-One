import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { InfoContextProvider } from "./context/InfoContext";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InfoContextProvider>
      <App />
    </InfoContextProvider>
  </React.StrictMode>
)
