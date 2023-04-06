import './globals.css'
import React from 'react'
import Nav from '@/components/nav/nav'

export const metadata = {
    title: 'Nate Reprogle',
    description: 'Meet Nate Reprogle, Software Engineer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
    )
}
