import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='fixed z-50 w-full h-12 bg-gradient-to-b from-black/50 to-transparent font-bold  backdrop-blur-sm flex w-full justify-around items-center'>
        <NavLink
        to={'/'}
        >ElIndioFriolan</NavLink>
        <NavLink
        to={'/tienda'}
        >TiendaOnline</NavLink>
        <div>MEnu</div>
    </nav>
  )
}
