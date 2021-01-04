import React from 'react'
import RegisterForm from './RegisterForm'

const LastCallToAction = () => {


    return (
        <div className="bg-gray-800 text-white">
            <h2 className="text-xl mt-16 mb-4 text-gray-700 text-center"></h2>
            <div className="flex flex-column flex-wrap justify-around items-center my-20">
                <div className="w-full lg:w-2/3 lg:px-36 lg:py-24 px-24 py-12 rounded-sm">
                    <p className="text-4xl text-white">Te ayudamos a encontrar tu mejor opción al mejor precio</p>
                    <p className="text-white text-xl pt-4">Solo registra tu correo electrónico y nosotros nos encargamos del resto</p>
                    <RegisterForm></RegisterForm>  
                </div>
            </div>
        </div>
        )
}

export default LastCallToAction                   






