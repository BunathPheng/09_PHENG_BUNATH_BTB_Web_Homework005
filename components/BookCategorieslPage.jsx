"use client";

import { useSearchParams } from 'next/navigation';
import GetBookfilter from './GetBookFilter';
import GetBookAll from './GetBookAll';
import GetBookSearch from './GetBookSearch';

export default function BookCategoriesClient({ books, getfilter, searchbook }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const searchtTitle = searchParams.get("search");

  const filteredSearchBooks = searchtTitle
    ? searchbook.filter(book => 
        String(book.book_title.toLowerCase()).includes(String(searchtTitle.toLowerCase()))
      )
    : [];

  return (
    <>
      {query ? (
        <GetBookfilter filter={getfilter} />
      ) : (
        <>
          {searchtTitle ? (
            filteredSearchBooks.length > 0 ? (
              <GetBookSearch search={filteredSearchBooks} />
            ) : (
              ""
            )
          ) : (
            <GetBookAll bookAll={books} /> 
          )}
        </>
      )}
    </>
  );
}
