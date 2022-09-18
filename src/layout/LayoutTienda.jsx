import React from 'react'
import Footer from '../views/Tienda/Footer/Footer'
import Header from '../views/Tienda/Header/Header'
import MainTienda from '../views/Tienda/Main/MainTienda'

export default function LayoutTienda() {
  return (
    <div className='w-full overflow-hidden text-[#1C2128]'>
        <Header/>
        <MainTienda/>
    <Footer/>
</div>
  )
}
