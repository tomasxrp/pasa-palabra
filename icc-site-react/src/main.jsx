import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PasaPalabraPage from './pages/PasaPalabraPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SeleccionDificultad from './pages/SeleccionDificultad.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Página principal */}
        <Route path="/juego" element={<PasaPalabraPage />} /> {/* Página secundaria */}
        <Route path='/about' element={<AboutPage/>} /> {/* Página secundaria */}
        <Route path='/dificultad' element={<SeleccionDificultad/>} /> {/* Página secundaria */}
          /* probando jeje */
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
