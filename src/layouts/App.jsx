import React from 'react'
import { Outlet } from 'react-router-dom'

import LayoutsNavbar from '@/layouts/Navbar'

function App() {
  return (
    <>
      <LayoutsNavbar />
      <Outlet />
    </>
  )
}

export default App
