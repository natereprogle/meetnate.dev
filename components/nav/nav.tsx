'use client'

import styles from '@/components/nav/nav.module.css'

export default function Nav({ ...props }) {
    return (
        <nav
            className={`p-3 md:w-2/3 xl:w-1/2 md:my-7 mx-auto flex justify-end items-center space-x-2 ${styles.navbar}`}>
            <span>Hi there!</span>
        </nav>
    )
}
