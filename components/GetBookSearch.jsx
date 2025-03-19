import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import BooksCard from './BooksCard';

export default function GetBookSearch({search}) {
    const pathname = usePathname();
    const trimmedPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    const encodeForUrl = (str) => {
      return encodeURIComponent(str).replace(/%20/g, '+');
    };  
    
    return (
      <div className="mt-10 grid grid-cols-2 gap-10">
        {search && search.map((book) => (
          <Link
            href={`/read-full-article/${book.id}?type=book&name=${encodeForUrl(trimmedPathname)}&title=${encodeForUrl(book.book_title)}`}
            key={`book-${book.id}`}
          >
            <BooksCard
              image={book.image}
              title={book.book_title}
              des={book.description}
            />
          </Link>
        ))}
        {
           
        }
      </div>
    );
}
