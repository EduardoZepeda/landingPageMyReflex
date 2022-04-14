import React from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen text-gray-800'>
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
