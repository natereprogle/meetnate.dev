import React from 'react'
import { Noto_Serif_Display } from 'next/font/google'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Body() {
    return (
        <div className={'space-y-14 mt-8 mx-7 lg:mx-20'}>
            <h1
                className={`justify-between items-center header-text ${notoSerifDisplay.className}`}>
                I am a{' '}
                <span className={'highlight-blue'}>Software Engineer</span>{' '}
                working in Contact Center Engineering based in{' '}
                <span className={'highlight-orange'}>Arkansas</span>. I&apos;ve
                carried many titles over my career, with{' '}
                <span className={'highlight-green'}>skills including</span>{' '}
                management, logistics, & excellent customer service
            </h1>
            <hr className={'text-raisinblack-400 bg-raisinblack-400 h-[2px]'} />
            <div className={'block pb-10 lg:flex lg:justify-between'}>
                <h2 className={`subheader-text ${notoSerifDisplay.className}`}>
                    About me
                </h2>
                <p className={'leading-7 lg:w-1/2'}>
                    I excel in fast-paced customer focused environments where
                    service is the main goal. While many say they&apos;re good
                    at multitasking, I pride myself in being able to handle
                    multiple tasks efficiently <em>and</em> accurately. I&apos;m
                    also very passionate about driving positive change in the
                    workforce as well as the world we live in. <br />
                    <br />I started working in the food industry while going to
                    college full time. After 3 years, I moved full-time to
                    transportation and logistics while continuing my studies.
                    Within 6 months, and not much experience to my name, I moved
                    into a management position where I exceeded even my own
                    expectations. After graduating, I moved into IT as a Contact
                    Center Engineer on my company&apos;s Unified Communications
                    Engineering team. Finally, I recently received a promotion
                    to Software Engineer on the same team. <br />
                    <br />
                    While my career is in Contact Center, I have experience with
                    both system administration and cloud solutions. Hosting my
                    own servers and services, both on premise and in the cloud,
                    writing my own website from scratch, and many other projects
                    I&apos;ve worked on have given me the opportunity to learn
                    many valuable skills that definitely broaden my portfolio
                    and horizons.
                </p>
            </div>
            <div>
                <h1 className={'header-text'}>Content below here</h1>
                <h1 className={'header-text'}>Content below here</h1>
                <h1 className={'header-text'}>Content below here</h1>
                <h1 className={'header-text'}>Content below here</h1>
                <h1 className={'header-text'}>Content below here</h1>
                <h1 className={'header-text'}>Content below here</h1>
                <h1 className={'header-text'}>Content below here</h1>
                <h1 className={'header-text'}>Content below here</h1>
            </div>
        </div>
    )
}
