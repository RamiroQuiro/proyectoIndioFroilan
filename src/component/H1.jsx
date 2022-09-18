import React from 'react'

export default function H1({children,span,className}) {
  return (
    <h1 className={`${className} text-6xl font-black font-sunday`}>{children}<br/> <span className='uppercase text-7xl'>{span}</span></h1>
  )
}
