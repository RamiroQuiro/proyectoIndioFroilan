import React from 'react'

export default function H1({children,span,className}) {
  return (
    <h1 className={`${className} md:text-6xl  text-3xl font-black font-sunday`}>{children}<br/> <span className='uppercase text-5xl md:text-7xl'>{span}</span></h1>
  )
}
