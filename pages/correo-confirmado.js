import React from 'react'
import Head from 'next/head'
import SocialNetworks from '../components/SocialNetworks'

const emailConfirmed = () => {
    return (

    <div className="flex flex-row justify-center">
        <Head>
            <title>Ya confirmamos tu correo - Mi reflex</title>
            <meta property="og:title" content="Mi reflex" key="Mi reflex" />
            <meta property="og:description" content="Mi reflex" key="Mi reflex" />
        </Head>
        <div className="mt-32 w-3/4 lg:w-2/5">
            <h1 className="text-4xl">Listo, es todo</h1>
            <p className="text-xl leading-loose mt-8">Gracias por ayudarnos a protegerte del spam. Puedes esperar ofertas geniales en cuanto terminemos los últimos detalles de nuestra plataforma.</p>
            <p className="text-xl leading-loose mt-8">Mientras tanto síguenos en nuestras redes sociales.</p>
        </div>
    </div>)
}

export default emailConfirmed