import React from 'react'

const Card = ({title, image_url, text}) => {
    return (
        <div className="h-96 pt-12 px-16 rounded-sm text-gray-700 bg-white w-96 m-8 shadow">
        <img src={image_url} alt=""/>
            <h3 className="pt-4 text-xl font-bold">{title}</h3>
            <p className="text-md font-bold">{text}</p>
        </div>
        )
}

export default Card