import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Books from './App.jsx'
// import App from  './Marsheet.jsx'
import App from './ControllForm.jsx'
import FeedbackForm from './UnControlledForm1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
