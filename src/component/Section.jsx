import React from 'react'

export default function Section({className,children}) {
  return (
    <section className={`${className} flex w-11/12 mx-auto my-20 gap-10 `}>{children}</section>
  )
}
