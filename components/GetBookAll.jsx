"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import BooksCard from '@/components/BooksCard';

export default function GetBookAll({ bookAll }) {
  const pathname = usePathname();
  const trimmedPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const encodeForUrl = (str) => {
    return encodeURIComponent(str).replace(/%20/g, '+');
  };  
  
  return (
    <div className="mt-10 grid grid-cols-2 gap-10">
      {bookAll && bookAll.map((book) => (
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