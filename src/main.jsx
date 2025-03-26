import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import all styles 
import './Style/global.css'
import './Style/Main.css'
import './Style/Effects..css'
import './Style/Navbar.css'
import './Style/ResponsiveLayouts.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
)
