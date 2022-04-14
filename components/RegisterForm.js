import React, { useState } from 'react'
import { useRouter } from 'next/router'

import registerEmail from '../utils/registerEmail'
import fbTrackEvent from '../utils/fbTrackEvent'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const formDataToJson = (target) => {
    const formData = new FormData(target)
    const formValues = {}
    formData.forEach((value, key) => formValues[key] = value)
    return formValues
  }

  const handleInput = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const response = await registerEmail(formDataToJson(event.target))
    const { error = '' } = await response.json()
    if (response.status === 201) {
      setLoading(false)
      setError(error)
      router.push('/confirma-tu-correo/')
    } else {
      setLoading(false)
      setError(error)
    }
  }

  return (
    <form className='my-4' onSubmit={handleSubmit}>
      <label htmlFor='email'>Correo electrónico</label>
      <input disabled={loading} onChange={handleInput} name='email' value={email} aria-label='Ingreso de email' className='border border-gray-300 text-lg sm:w-full py-4 pl-4 rounded-xl' type='email' placeholder='tu@email.com' required />
      <br />
      <div className='text-red-600 text-lg'>{error}</div>
      <button disabled={loading} type='submit' className='transition delay-150 duration-300 ease-in-out hover:shadow-md p-4 mt-4 rounded-xl text-lg bg-gradient-to-r from-red-500 to-red-500 hover:from-red-500 hover:to-yellow-600 text-white'>Regístrame ya</button>
    </form>
  )
}

export default RegisterForm
