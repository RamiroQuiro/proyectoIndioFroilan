import React from 'react'

export default function TituloCardProducto({children}) {
  return (
    <h1 className="text-xl mt-2 pl-2 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{children}</h1>
  )
}
