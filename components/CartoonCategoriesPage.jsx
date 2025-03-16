'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import BooksCard from './BooksCard';

export default function CartoonCategoriesPage({cartoons}) {
    const pathname = usePathname();
      const trimmedPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;
      const encodeForUrl = (str) => {
        return encodeURIComponent(str).replace(/%20/g, '+');
      };  
  return (
    <div className="mt-10 grid grid-cols-2 gap-10">
      {cartoons.map((cartoon) => (
       <Link
       href={`/read-full-article/${cartoon.id}?type=cartoon&name=${encodeForUrl(trimmedPathname)}&title=${encodeForUrl(cartoon.ct_title)}`}
       key={`cartoon-${cartoon.id}`}
     >
       <BooksCard
         image={cartoon.image}
         title={cartoon.ct_title}
         des={cartoon.ct_description}
       />
     </Link>
      ))}
    </div>
  )
}
