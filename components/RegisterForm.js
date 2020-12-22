import React, { useState } from 'react'

const RegisterForm = () => {
    const [email, setEmail] = useState('')

    const handleInput = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="email" onChange={handleInput} value={email} className="border border-gray-300 text-lg sm:w-full text-gray-500 mt-8 py-4 px-4 rounded-xl" type="email" placeholder="Dinos a que email te avisamos" required/>
            <br/>
            <button type="submit" className="transition duration-500 hover:shadow-md p-4 mt-4 rounded-xl text-lg bg-red-500 hover:bg-red-400 text-white transform hover:-translate-y-1 hover:scale-105">Regístrame ya</button>
        </form>  
        )
}

export default RegisterForm                   

