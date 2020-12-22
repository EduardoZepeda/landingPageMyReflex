import React, { useState } from 'react'

const SocialNetworks = () => {


    return (
        <div>
            <h2 className="text-xl text-gray-100 mb-4">Síguenos en redes sociales</h2>
            <div className="flex flex-row justify-center">
                <div className="mx-1">
                    <a href="https://facebook.com"><img width="30px" height="30px" src="/logos/facebook_logo.svg" alt="Facebook"/></a>
                </div>
                <div className="mx-1">
                    <a href="https://instagram.com"><img width="30px" height="30px" src="/logos/instagram_logo.svg" alt="Instagram"/></a>
                </div>
                <div className="mx-1">
                    <a href="https://twitter.com"><img width="30px" height="30px" src="/logos/twitter_logo.svg" alt="Twitter"/></a>
                </div>
            </div>
        </div>
    )
}

export default SocialNetworks                   

