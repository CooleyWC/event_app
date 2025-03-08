import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './components/context/AuthProvider'
import { EventsProvider } from './components/context/EventsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </EventsProvider>
  </StrictMode>,
)
