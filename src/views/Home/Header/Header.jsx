import React from 'react'
import Navbar from './Navbar'

import './headerStyle.css'
import BackgroundHeader from './BackgroundHeader'
import H1 from '../../../component/H1'

export default function Header() {
  return (
    <header className='w-full h-[110vh]  text-gray-100 relative '>
        <BackgroundHeader/>
        <Navbar/>
        <div className='w-full z-10 absolute top-0 left-0 h-full'>
            <div className=' flex  items-center  w-10/12 mx-auto h-full justify-between  relative'>
                <div className='w-2/5 p-3 rounded-lg -translate-y-32 bg-black/20 backdrop-blur-sm '>
                    <H1
                    className={""}
                    span={"Froilan"}
                    >Patio del Indio  </H1>
                </div>
                <div className='rounded-full  bg-black/20 backdrop-blur-sm h-1/2 w-1/3'>
                    <h2>como llegar</h2>
                </div>

            </div>
        </div>

    </header>
  )
}
