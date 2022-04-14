import React from 'react'
import { useRouter } from 'next/router'

import SocialNetworks from './SocialNetworks'
import PrivacyPolicy from './PrivacyPolicy'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='relative bg-gray-900 py-12 flex flex-column flex-wrap justify-around items-center'>
      <Logo />
      <PrivacyPolicy />
      <SocialNetworks />
    </footer>
  )
}

export default Footer
