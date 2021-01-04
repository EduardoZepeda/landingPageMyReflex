import React, { useState } from 'react'
import Card from './Card'

const Proposal = () => {


    return (
        <div className="bg-gray-100">
            <h2 className="text-4xl mt-20 mb-4 text-gray-700 text-center">¿Por qué suscribirte?</h2>
            <div className="flex flex-column flex-wrap justify-around items-center my-20 text-gray-700">
            <Card image_url="/idea.png" title="Completamente gratis" text="Nuestro servicio es totalmente gratuito, no te cobramos absolutamente nada."></Card>
            <Card image_url="/configuration.png" title="Sin instalar nada" text="No hace falta que instales o configures nada en tu computadora o navegador."></Card>
            <Card image_url="/coffee.png" title="Cancela cuando quieras" text="Cancela tu suscripción con un click en cualquiera de nuestros correos"></Card>
        </div>
        </div>
        )
}

export default Proposal                   



