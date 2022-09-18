import React from 'react'
import Navbar from './Navbar'

import './headerStyle.css'
import BackgroundHeader from './BackgroundHeader'
import H1 from '../../../component/H1'

export default function Header() {
  return (
    <header className='w-full md:h-[110vh] h-screen text-gray-100 relative '>
        <BackgroundHeader/>
        <Navbar/>
        <div className='w-full z-10 md:absolute top-0 left-0 h-full'>
            <div className=' flex md:flex-row flex-col items-center pt-20 md:pt-0 md:w-10/12 mx-auto h-full justify-between  relative'>
                <div className='md:w-2/5 p-3 rounded-lg md:-translate-y-32 bg-black/20 backdrop-blur-sm '>
                    <H1
                    className={""}
                    span={"Froilan"}
                    >Patio del Indio  </H1>
                </div>
                <div className='rounded-full rotate-45 skew-y-8 skew-x-12  md:block hidden  bg-black/20 backdrop-blur-sm h-1/2 w-1/3'>
                </div>

            </div>
        </div>

    </header>
  )
}
