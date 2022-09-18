import React from 'react'
import BannerOfertas from './BannerOfertas'
import GaleriaArtesane from './GaleriaArtesane'
import SectionProductos from './SectionProductos'
import Preguntas from'../../Home/Main/Preguntas'
import Contacto from'../../Home/Main/Contacto'
export default function MainTienda() {
  return (
    <main className='w-full'>
      <SectionProductos/>

      <BannerOfertas/>
      <GaleriaArtesane/>
      <Preguntas/>
      <Contacto/>
    </main>
  )
}
