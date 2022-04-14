import React, { useEffect } from 'react'
import Head from 'next/head'

import fbTrackEvent from '../utils/fbTrackEvent'

const confirmationEmailSent = () => {
  useEffect(() => {
    fbTrackEvent('CompleteRegistration')
  }, [])
  return (

    <div className='flex flex-row justify-center'>
      <Head>
        <title>Confirma tu correo electrónico - Mi reflex</title>
        <meta property='og:title' content='Mi reflex' key='Mi reflex' />
        <meta property='og:description' content='Mi reflex' key='Mi reflex' />
        <meta name='Description' content='Replace this' />
      </Head>
      <div className='mt-32 w-3/4 lg:w-2/5'>
        <h1 className='text-4xl'>Queremos saber si eres tú</h1>
        <p className='text-xl mb-16 leading-loose mt-8'>Te hemos enviado un correo para asegurarnos de que eres tú. Por favor revisa tu bandeja de correo y tu bandeja de spam.</p>
      </div>
    </div>
  )
}

export default confirmationEmailSent
