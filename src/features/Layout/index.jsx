import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/indes'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout