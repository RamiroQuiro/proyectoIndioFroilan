import React from 'react'
import Footer from '../views/Home/Footer/Footer'
import Header from '../views/Home/Header/Header'
import Main from '../views/Home/Main/Main'

export default function LayoutHome() {
  return (
    <div className='w-full overflow-hidden text-[#1C2128]'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}
