import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleClick = (event) => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
      <div className='flex items-center flex-no-shrink text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>Mi Reflex</span>
      </div>
      <div onClick={handleClick} className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-white border-lavanda-light hover:text-white hover:border-white'>
          &#9776;<title>Menu</title>
        </button>
      </div>
      <div className={`w-full block tracking-wide font-bold flex-grow lg:flex text-white lg:items-center lg:w-auto ${menuIsOpen ? '' : 'hidden'}`}>
        <div className='text-sm lg:flex-grow'>
          <div className='block mt-4 lg:inline-block lg:mt-0 text-lavanda-lighter hover:text-white mr-4'>
            <Link href='/'>Pagina principal</Link>
          </div>
          <div className='block mt-4 lg:inline-block lg:mt-0 text-lavanda-lighter hover:text-white mr-4'>
            <Link href='/sobre-nosotros'>Nosotros</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
