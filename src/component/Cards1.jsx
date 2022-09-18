import React from 'react'

export default function Cards1({children}) {
  return (
    <div className="md:rounded-full rounded-lg w-full md:w-1/3 h-64 bg-gradient-to-tl from-orange-800/70 to-amber-600/70 mx-auto flex flex-col items-center justify-center ">

        {children}
        </div>
  )
}
