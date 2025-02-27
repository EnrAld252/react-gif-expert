import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp.jsx'
import './styles.css'
createRoot(document.getElementById('root')).render(
  //StrictMode Ayuda a identificar los componentes a decir que el codigo sea lo ma optimo y actual
  //y solo se aplica en desarrollo
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
