import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Note, Learn } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Note />
    <Learn />
  </StrictMode>
)
