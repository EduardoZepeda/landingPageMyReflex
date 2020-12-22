import React, { useState } from 'react'

const SocialProofCard = ({content, author}) => {


    return (
        <div className="mb-16 px-16 w-96">
            <p className="text-gray-700">{content}</p><span className="text-sm text-gray-500">— {author}</span>
        </div>
        )
}

export default SocialProofCard                   

