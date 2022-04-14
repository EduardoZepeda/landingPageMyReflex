import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ title, cardIcon, text }) => {
    const iconSize = '2x'

    useEffect(() => {
    })

    return (
        <div className='h-96 pt-12 px-16 rounded-sm text-gray-700 bg-white w-96 shadow'>
            <FontAwesomeIcon icon={cardIcon} size={iconSize} />
            <h3 className='pt-4 text-xl font-bold'>{title}</h3>
            <p className='text-md'>{text}</p>
        </div>
    )
}

export default Card
