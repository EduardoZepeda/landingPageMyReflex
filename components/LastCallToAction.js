import React from 'react'
import RegisterForm from './RegisterForm'

const LastCallToAction = () => {
  return (
    <div className='bg-gray-800 px-36 py-24 text-white'>
      <h2 className='text-xl mb-4 text-gray-700 text-center' />
      <div className='flex flex-column flex-wrap justify-around items-center'>
        <div className='my-4 rounded-sm max-w-prose'>
          <p className='text-4xl text-white'>Te ayudamos a encontrar tu mejor opción al mejor precio</p>
          <p className='text-white text-xl pt-4'>Solo registra tu correo electrónico y nosotros nos encargamos del resto</p>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default LastCallToAction
