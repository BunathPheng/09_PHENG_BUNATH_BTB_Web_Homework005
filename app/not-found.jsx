import React from 'react'
import "../app/globals.css"
import Link from 'next/link'
export default function notfound() {
    return (

        <>
            <div classname="grid h-screen place-content-center bg-white px-4">
                <div classname="text-center">
                    <h1 classname="text-9xl font-black text-gray-200">404</h1>
                    <p classname="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Uh-oh!
                    </p>
                    <p classname="mt-4 text-gray-500">We can't find that page.</p>
                    <link
                        href="/"
                        classname="mt-6 inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
                    />
                    Go Back Home
                </div>
            </div>

        </>
    )
}   
