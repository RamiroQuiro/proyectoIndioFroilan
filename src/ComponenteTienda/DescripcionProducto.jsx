import React from 'react'

export default function DescripcionProducto({children}) {
  return (
    <p className="pl-3 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">{children}</p>
  )
}
