import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutHome from './layout/LayoutHome'
import LayoutTienda from './layout/LayoutTienda'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
      <Route
      path='/' element={<LayoutHome/>}/>
      <Route
      path='/tienda' element={<LayoutTienda/>}/>
   </Routes>
  )
}

export default App
