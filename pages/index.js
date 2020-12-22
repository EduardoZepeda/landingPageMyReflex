import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Card from '../components/Card'
import RegisterForm from '../components/RegisterForm'
import SocialProofCard from '../components/SocialProofCard'

const Home = () => {
    return (
    <>
    <Head>
        <title>Mi reflex</title>
        <meta property="og:title" content="Mi reflex" key="Mi reflex" />
        <meta property="og:description" content="Mi reflex" key="Mi reflex" />
    </Head>
    <div className="flex flex-column flex-wrap items-center justify-left pt-24 pb-32 bg-cover bg-center"
     style={{backgroundImage: `url(${"background_hero.jpg"})`}}>
        <div className="lg:w-3/5 md:w-full">
            <div className="text-gray-100 px-20">
                <h1 className="text-4xl md:text-6xl mt-16 mb-4">Descuentos para fotógrafos y filmmakers</h1>
                <p className="text-xl mt-2 leading-normal">Olvídate de buscar página por página de manera manual. Diariamente revisamos Amazon, Liverpool, Sanborns y otras tiendas en linea. Si encontramos una oferta que no puedes perderte te avisamos al instante.</p>
                <RegisterForm></RegisterForm>  
            </div>
        </div>
    </div>
    <div className="bg-gray-100">
        <h2 className="text-4xl mt-20 mb-4 text-gray-700 text-center">¿Cómo funciona?</h2>
        <div className="flex flex-column flex-wrap justify-around items-center my-20 text-gray-700">
        <Card image_url="/idea.png" title="Completamente gratis" text="Nuestro servicio es totalmente gratuito, no te cobramos por nada"></Card>
        <Card image_url="/configuration.png" title="Sin configurar nada" text="No hace falta que configures nada, nosotros nos encargamos de todo"></Card>
        <Card image_url="/coffee.png" title="Sin spam" text="Solamente te mandaremos te avisaremos de accesorios y equipo relacionado con la fotografía y el video"></Card>
    </div>
    </div>
    <h2 className="text-4xl mt-20 text-gray-700 text-center">¿Qué opinan los demás?</h2>
    <div className="flex flex-column flex-wrap justify-around items-center my-20">
        <SocialProofCard content="My social proof story" author="Author"></SocialProofCard>
        <SocialProofCard content="My social proof story" author="Author"></SocialProofCard>
        <SocialProofCard content="My social proof story" author="Author"></SocialProofCard>
    </div>
    <div className="bg-gray-800">
        <h2 className="text-xl mt-16 mb-4 text-gray-700 text-center"></h2>
        <div className="flex flex-column flex-wrap justify-around items-center my-20">
            <div className="w-full lg:w-2/3 lg:px-36 lg:py-24 px-24 py-12 rounded-sm">
                <p className="text-4xl text-white">No te vuelvas a perder de ninguna oferta</p>
                <p className="text-white text-xl pt-4">Coloca tu correo aquí abajo y nosotros nos encargamos del resto</p>
                <RegisterForm></RegisterForm>  
            </div>
        </div>
    </div>
    </>
    )
}

export default Home