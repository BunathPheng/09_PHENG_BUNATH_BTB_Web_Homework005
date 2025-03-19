import { Book, Book1, Home2 } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ rule, thing }) {
    return (
        <nav className="flex items-center overflow-x-auto whitespace-nowrap max-w-6xl px-6 pt-10 mx-auto">
            <div className="flex items-center gap-3">
                <Link href={"/"} className='hover:text-[#087e8b]'>
                    <div className="flex items-center gap-3">
                        <Home2 color={"#0b3954"} variant='Outline' size={22} />
                        <p className='text-xl font-bold'>Home</p>
                    </div>
                </Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <Link className='hover:text-[#087e8b]' href={`/${rule === "Old-school-cartoons" ? "old-school-cartoons" : "book-categories"}`}>
                    <div className="flex items-center gap-3">
                        <Book color={"#0b3954"} variant="Outline" size={22} />
                        <p className="text-xl font-bold">{rule}</p>
                    </div>
                </Link>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <Book1 color={"#e02424"} variant='Outline' size={22} />
                <p className='text-xl text-red-600 font-bold'>{thing}</p>
            </div>
        </nav>

    )
}
