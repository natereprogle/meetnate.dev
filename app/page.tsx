'use client'

import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'

import React, { useEffect, useState } from 'react'

import styles from '@/app/page.module.css'

export default function Home() {
    const [isVisible, setIsVisible] = useState(true)

    // useEffect for both bouncing arrow and navbar. Can be customized for different useState variables and transition heights
    useEffect(() => {
        window.addEventListener('scroll', () => {
            listenToScroll(0, setIsVisible)
        })
        return () =>
            window.removeEventListener('scroll', () => {
                listenToScroll(0, setIsVisible)
            })
    }, [])

    const listenToScroll = (
        height: number,
        callback: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
        let heightToHideFrom = height
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > heightToHideFrom) {
            callback(false)
        } else {
            callback(true)
        }
    }

    // A small react fragment which renders the Nav differently based on screen sizes and scroll distance
    const mobileDiv: JSX.Element = (
        <>
            <div className={'block md:hidden'}>
                <Nav />
            </div>
            <div className={'hidden md:block'}>
                <div
                    className={`${
                        !isVisible ? styles['fade-in'] : styles['fade-out']
                    }`}>
                    <Nav />
                </div>
            </div>
        </>
    )

    return (
        <>
            {/* Render navbar only if user has scrolled */}
            {mobileDiv}
            <div className={'h-screen flex flex-col justify-between'}>
                <Header />
                {/* Stop rendering bouncing arrow if user has scrolled, otherwise render it */}
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
