import React from 'react'
import SocialProofCard from './SocialProofCard'

const SocialProof = () => {
  return (
    <div className='px-6'>
      <h2 className='text-4xl mt-20 text-gray-700 text-center'>¿Qué opinan los demás?</h2>
      <div className='flex flex-column flex-wrap justify-around items-center my-20'>
        <SocialProofCard content='My social proof story' author='Author' />
        <SocialProofCard content='My social proof story' author='Author' />
        <SocialProofCard content='My social proof story' author='Author' />
      </div>
    </div>
  )
}

export default SocialProof
