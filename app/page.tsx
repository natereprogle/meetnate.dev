'use client'

import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'
import React, { useEffect, useState } from 'react'

import styles from '@/app/page.module.css'

export default function Home() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 0
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > heightToHideFrom) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }

    return (
        <>
            <Nav />
            <div className={'h-screen flex flex-col justify-between'}>
                <Header />
                {/* If the arrow is visible, meaning the page's scroll is above the set limit, fade it in and keep it. Otherwise, fade it out and hide it */}
                <div
                    className={`${
                        isVisible ? styles['fade-in'] : styles['fade-out']
                    }`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-10 h-10 md:w-14 md:h-14 ${styles['bounce']} mx-auto`}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                    </svg>
                </div>
            </div>
            <p>This is a test paragraph</p>
        </>
    )
}
