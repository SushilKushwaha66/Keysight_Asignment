import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Music from './lifecycle.jsx'
import CounterApp from './Hooks.jsx'
import App from './Price.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <CounterApp/> */}
    <App/>
    </>
    
  </StrictMode>,
)
