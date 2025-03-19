import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CardCartoons from './CardCartoons';


export default function GetCartoonsAll({allCartoons}) {
     const pathname = usePathname();
          const trimmedPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;
          const encodeForUrl = (str) => {
            return encodeURIComponent(str).replace(/%20/g, '+');
  };  
  return (
    <div className="mt-10 grid grid-cols-3 gap-10">
      {allCartoons && allCartoons.map((cartoon) => (
       <Link
       href={`/read-full-article/${cartoon.id}?type=cartoon&name=${encodeForUrl(trimmedPathname)}&title=${encodeForUrl(cartoon.ct_title)}`}
       key={`cartoon-${cartoon.id}`}
     >
        <CardCartoons
                image={cartoon.image}
                title={cartoon.ct_title}
                views={cartoon.view_count}
                year={cartoon.published_year}
              />
     </Link>
      ))}
    </div>
  )
}
