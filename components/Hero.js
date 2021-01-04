import React from 'react'
import RegisterForm from './RegisterForm'

const Hero = () => {


    return (
        <div className="flex flex-column flex-wrap items-center justify-left pt-24 pb-32 bg-cover bg-center"
         style={{backgroundImage: `url(${"background_hero.jpg"})`}}>
            <div className="lg:w-3/5 md:w-full">
                <div className="text-gray-100 px-20">
                    <h1 className="text-4xl md:text-6xl mt-16 mb-4">Te ayudamos a elegir tu equipo fotográfico al mejor precio</h1>
                    <p className="text-xl my-2 leading-normal">Diariamente revisamos Amazon, Aliexpress, Liverpool, Sanborns y otras tiendas en linea para mostrarte los mejores precios. Además te avisamos por correo electrónico de ofertas imperdibles.</p>
                    <RegisterForm></RegisterForm>  
                </div>
            </div>
        </div>
        )
}

export default Hero                   



