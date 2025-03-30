import React from 'react'
import BotonIrAJuego from './components/BotonIrAJuego'
import NavBarPrincipal from './components/NavBarPrincipal'
import CarruselImagenes from './components/CarruselImagenes'
import './App.css'

function App() {

  return(
    <div className="pt-20 bg-gray-900 w-full h-screen ">
      <NavBarPrincipal/>
      <div className='p-4 w-full justify-center'>
        <CarruselImagenes/>
        <BotonIrAJuego/>
      </div>
    </div>
  )
}

export default App
