import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const SocialNetworks = () => {
  const iconSize = '2x'

  return (
    <div className='mx-16 my-6 text-gray-100'>
      <h2 className='text-xl mb-4'>Síguenos en redes sociales</h2>
      <div className='flex gap-x-2 flex-row justify-center'>
        <div>
          <a className='px-2' href='https://facebook.com'>
            <FontAwesomeIcon icon={faFacebook} size={iconSize} />
          </a>
        </div>
        <div>
          <a className='px-2' href='https://instagram.com'>
            <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          </a>
        </div>
        <div>
          <a className='px-2' href='https://twitter.com'>
            <FontAwesomeIcon icon={faTiktok} size={iconSize} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialNetworks
