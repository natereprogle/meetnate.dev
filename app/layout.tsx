import './globals.css'
import React from 'react'

export const metadata = {
    title: 'Nate Reprogle',
    description: 'Meet Nate Reprogle, Software Engineer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <html lang="en">{children}</html>
}
