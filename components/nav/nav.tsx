'use client'

import styles from '@/components/nav/nav.module.css'
import { Switch } from '@headlessui/react'

export default function Nav({ ...props }) {
    return (
        <nav
            className={`p-3 md:w-2/3 xl:w-1/2 md:my-7 mx-auto flex justify-end items-center space-x-2 ${styles.navbar}`}>
            <span>📺</span>
            <Switch
                checked={props.state}
                onChange={props.setTrigger}
                title={'Toggle Animated Background'}
                className={`${
                    props.state ? 'bg-aliceblue-500' : 'bg-raisinblack-900'
                } relative inline-flex h-[19px] w-[35px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                <span className={'sr-only'}>Enable animated background</span>
                <span
                    aria-hidden={'true'}
                    className={`${
                        props.state ? 'translate-x-4' : 'translate-x-0'
                    } pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out text-[10px]`}></span>
            </Switch>
        </nav>
    )
}
