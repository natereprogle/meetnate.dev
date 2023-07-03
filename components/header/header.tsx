import { Noto_Serif_Display } from 'next/font/google'
import { motion } from 'framer-motion'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function Header() {
    return (
        <header
            className={
                'h-screen mt-24 sm:mt-0 items-center mx-7 lg:ml-20 space-x-4 sm:space-x-0 space-y-10 sm:space-y-0 justify-around sm:[justify-content:normal] sm:grid sm:grid-cols-sm-header md:grid-cols-md-header lg:grid-cols-lg-header xl:grid-cols-xl-header'
            }>
            <div className={'flex flex-col'}>
                <h3
                    className={`text-[1.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium ${notoSerifDisplay.className}`}>
                    Hi there
                </h3>
                <h3
                    className={`text-[3rem] -mt-5 -mb-4 sm:-mt-10 sm:-mb-4 md:-my-12 sm:text-[5rem] md:text-[7rem] lg:text-[10rem] font-bold ${notoSerifDisplay.className}`}>
                    I&apos;m Nate
                </h3>
            </div>
            <motion.div
                className={'flex justify-center'}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={'/memoji.png'}
                    alt={'Cartoon version of myself'}
                    className={
                        'h-[180px] sm:h-[120px] md:h-[160px] lg:h-[240px] md:my-0 object-bottom object-contain'
                    }></img>
            </motion.div>
        </header>
    )
}
