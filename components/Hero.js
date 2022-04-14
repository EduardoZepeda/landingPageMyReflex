import React from 'react'
import RegisterForm from './RegisterForm'

const Hero = () => {
  return (
    <div className='flex flex-column flex-wrap px-20 text-white py-16 items-center justify-left relative'>
      <div className='max-w-prose'>
        <h1 className='text-4xl mt-16 mb-4'>Mi reflex</h1>
        <h2 className='text-4xl mt-16 mb-4'>Tu equipo fotográfico al mejor precio</h2>
        <p className='text-xl my-2 text-gray-400 leading-normal'>Revisamos todas las tiendas en linea para mostrarte los mejores precios y ofertas.</p>
        <RegisterForm />
      </div>
      <picture>
        <img src='background_hero.jpg' className='w-full h-full object-cover -z-10  absolute top-0 bottom-0 right-0 left-0 opacity-90' />
      </picture>
    </div>
  )
}

export default Hero
