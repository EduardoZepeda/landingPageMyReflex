import React from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

const PrivacyPolicy = () => {
    return (

    <div className="flex flex-row justify-center">
        <Head>
            <title>Aviso de privacidad -Mi reflex</title>
            <meta property="og:title" content="Mi reflex" key="Mi reflex" />
            <meta property="og:description" content="Mi reflex" key="Mi reflex" />
        </Head>
        <div className="mt-32 w-3/4 lg:w-2/4">
            <h1 className="text-4xl">Nuestro aviso de privacidad</h1>
            <p className="leading-loose mt-8">Pendiente</p>
        </div>
    </div>)
}

export default PrivacyPolicy