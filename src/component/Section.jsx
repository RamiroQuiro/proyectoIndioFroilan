import React from 'react'

export default function Section({className,children}) {
  return (
    <section className={`${className} flex flex-warp flex-col md:flex-row w-11/12 mx-auto my-20 gap-10 `}>{children}</section>
  )
}
