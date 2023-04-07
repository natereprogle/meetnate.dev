'use client'

import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'
import React, { useState } from 'react'

export default function Home() {
    const [animate, setAnimate] = useState(true)

    return (
        <body className={animate ? 'animatedNoise' : 'staticNoise'}>
            <Nav setTrigger={setAnimate} state={animate} />
            <Header />
        </body>
    )
}
