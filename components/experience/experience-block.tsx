import { Noto_Serif_Display } from 'next/font/google'
import styles from '@/components/experience/experience.module.css'

const notoSerifDisplay = Noto_Serif_Display({
    subsets: ['latin'],
    weight: 'variable',
})

export default function ExperienceBlock({ props }: { props: any }) {
    return (
        <div className="mb-7 block lg:flex lg:justify-between lg:space-x-5">
            <div className="flex flex-col lg:w-1/3 lg:space-y-2">
                <h1 className="font-bold">{props.timeRange}</h1>
                <h2>{props.company}</h2>
            </div>
            <div className="flex flex-col lg:w-3/4 lg:space-y-2">
                <h1
                    className={`text-2xl font-extrabold ${notoSerifDisplay.className}`}>
                    {props.title}
                </h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
