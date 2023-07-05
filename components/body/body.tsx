import React from 'react'
import { Noto_Serif_Display } from 'next/font/google'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Body() {
    const whoAmI = ['item a', 'item b', 'item c']

    return (
        <div
            className={
                'mx-7 lg:ml-20 h-screen flex justify-center items-center'
            }>
            <div className={'sticky top-[40%]'}>
                <h3 className={`header-text ${notoSerifDisplay.className}`}>
                    So...who am I, <em>really</em>?
                </h3>
                <h3 className={`header-text ${notoSerifDisplay.className}`}>
                    Well, I&apos;m a
                </h3>
            </div>
            <div
                className={`header-text decoration-2 underline overflow-y-clip ${notoSerifDisplay.className}`}>
                {whoAmI.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}
