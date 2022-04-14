import React, { useState } from 'react'
import Card from './Card'
import { faLightbulb, faGears, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Proposal = () => {
    return (
        <div className='bg-gray-100 p-16'>
            <h2 className='text-4xl text-gray-700 text-center'>¿Por qué suscribirte?</h2>
            <div className='flex flex-column flex-wrap gap-8 justify-around items-center my-20 text-gray-700'>
                <Card cardIcon={faLightbulb} title='Completamente gratis' text='Nuestro servicio es totalmente gratuito, no te cobramos absolutamente nada.' />
                <Card cardIcon={faGears} title='Sin instalar nada' text='No hace falta que instales o configures nada en tu computadora o navegador.' />
                <Card cardIcon={faCircleCheck} title='Cancela cuando quieras' text='Cancela tu suscripción con un click en cualquiera de nuestros correos' />
            </div>
        </div>
    )
}

export default Proposal
