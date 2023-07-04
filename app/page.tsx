'use client'

import React, { useState } from 'react'
import { Noto_Serif_Display } from 'next/font/google'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

import styles from '@/app/page.module.css'
import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'

export default function Home() {
    const [isVisible, setIsVisible] = useState(true)

    // Framer motion to get rid of useEffect and instead just use their scroll hook
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, 'change', () => {
        listenToScroll(0, setIsVisible)
    })

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

    return (
        <>
            <Nav />
            <div className={'h-screen flex flex-col justify-between'}>
                <Header />
                {/* Stop rendering bouncing arrow if user has scrolled, otherwise render it */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-10 h-10 md:w-14 md:h-14 ${styles['bounce']} mx-auto`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{
                        duration: 0.8,
                        delay: isVisible ? 1.5 : 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                    />
                </motion.svg>
            </div>

            <div
                className={
                    'mx-7 lg:ml-20 h-screen flex flex-col justify-center'
                }>
                <h3
                    className={`text-[1.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium ${notoSerifDisplay.className}`}>
                    So...who am I, <em>really</em>?
                </h3>
                <div
                    className={`text-[1.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium ${notoSerifDisplay.className}`}>
                    <div className={`flex`}>
                        Well, I&apos;m a&nbsp;
                        <div
                            className={
                                'h-20 overflow-y-scroll border-b-2 border-black'
                            }>
                            <p>item a</p>
                            <p>item b</p>
                            <p>item c</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
