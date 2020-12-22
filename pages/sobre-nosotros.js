import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const AboutUs = () => {
    return (

    <div className="flex flex-row justify-center">
        <Head>
            <title>Sobre nosotros - Mi reflex</title>
            <meta property="og:title" content="Mi reflex" key="Mi reflex" />
            <meta property="og:description" content="Mi reflex" key="Mi reflex" />
        </Head>
        <div className="mt-32 w-3/4 lg:w-2/4">
            <h1 className="text-4xl">Sobre nosotros</h1>
            <p className="leading-loose mt-8"></p>
        </div>
    </div>)
}

export default AboutUs