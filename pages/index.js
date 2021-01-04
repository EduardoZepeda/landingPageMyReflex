import React from 'react'
import Head from 'next/head'

import Hero from '../components/Hero'
import Proposal from '../components/Proposal'
import SocialProof from '../components/SocialProof'
import LastCallToAction from '../components/LastCallToAction'

const Home = () => {
    return (
    <>
    <Head>
        <title>Mi reflex</title>
        <meta property="og:title" content="Mi reflex" key="Mi reflex" />
        <meta property="og:description" content="Replace this" key="Replace this" />
        <meta name="Description" content="Replace this" />
    </Head>
    <Hero/>
    <Proposal/>
    <SocialProof/>
    <LastCallToAction/>
    </>
    )
}

export default Home