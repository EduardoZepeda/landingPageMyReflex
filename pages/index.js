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
        <meta property="og:description" content="Replace this" key="Replace this" />
        <meta name="Description" content="Replace this" />
    </Head>
    <div className="flex flex-column flex-wrap items-center justify-left pt-24 pb-32 bg-cover bg-center"
     style={{backgroundImage: `url(${"background_hero.jpg"})`}}>
        <div className="lg:w-3/5 md:w-full">
            <div className="text-gray-100 px-20">
                <h1 className="text-4xl md:text-6xl mt-16 mb-4">Buscamos los mejores precios y ofertas para creadores audiovisuales</h1>
                <p className="text-xl mt-2 leading-normal">Diariamente revisamos Amazon, Aliexpress, Liverpool, Sanborns y otras tiendas en linea para avisarte de ofertas que no puedes perderte</p>
                <RegisterForm></RegisterForm>  
            </div>
        </div>
    </div>
    <div className="bg-gray-100">
        <h2 className="text-4xl mt-20 mb-4 text-gray-700 text-center">¿Por qué suscribirte?</h2>
        <div className="flex flex-column flex-wrap justify-around items-center my-20 text-gray-700">
        <Card image_url="/idea.png" title="Completamente gratis" text="Nuestro servicio es totalmente gratuito, no te cobramos absolutamente nada."></Card>
        <Card image_url="/configuration.png" title="Sin instalar nada" text="No hace falta que instales o configures nada en tu computadora o navegador."></Card>
        <Card image_url="/coffee.png" title="Cancela cuando quieras" text="Cancela tu suscripción con un click en cualquiera de nuestros correos"></Card>
    </div>
    </div>
    <h2 className="text-4xl mt-20 text-gray-700 text-center">¿Qué opinan los demás?</h2>
    <div className="flex flex-column flex-wrap justify-around items-center my-20">
        <SocialProofCard content="My social proof story" author="Author"></SocialProofCard>
        <SocialProofCard content="My social proof story" author="Author"></SocialProofCard>
        <SocialProofCard content="My social proof story" author="Author"></SocialProofCard>
    </div>
    <div className="bg-gray-800 text-white">
        <h2 className="text-xl mt-16 mb-4 text-gray-700 text-center"></h2>
        <div className="flex flex-column flex-wrap justify-around items-center my-20">
            <div className="w-full lg:w-2/3 lg:px-36 lg:py-24 px-24 py-12 rounded-sm">
                <p className="text-4xl text-white">Ahorra tiempo revisando sitios web</p>
                <p className="text-white text-xl pt-4">Nosotros lo hacemos por ti, solo registra tu correo electrónico y nosotros nos encargamos del resto</p>
                <RegisterForm></RegisterForm>  
            </div>
        </div>
    </div>
    </>
    )
}

export default Home