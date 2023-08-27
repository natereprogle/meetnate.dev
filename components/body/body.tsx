import React from 'react'
import { Noto_Serif_Display } from 'next/font/google'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Body() {
    return (
        <div className={'space-y-32 mt-8'}>
            <div className={'mx-7 lg:mx-20 justify-between items-center'}>
                <div className={`header-text ${notoSerifDisplay.className}`}>
                    <h3>
                        I am a{' '}
                        <span id={'highlight-blue'}>Software Engineer</span>{' '}
                        working in Contact Center Engineering based in{' '}
                        <span id={'highlight-orange'}>Arkansas</span>. I&apos;ve
                        carried many titles over my career, with{' '}
                        <span id={'highlight-green'}>skills including</span>{' '}
                        management, logistics, & excellent customer service
                    </h3>
                </div>
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
