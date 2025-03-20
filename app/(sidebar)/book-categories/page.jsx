import BookCategoriesClient from '@/components/BookCategorieslPage';
import ButtonTypeServer from '@/components/ButtonTypeServer';
import SelectCategoriesPage from '@/components/SelectCategoriesPage';
import getAllBooks from '@/services/getAllBooks';

export default async function BookCategoriesPage({ params, searchParams }) {
  const data = await getAllBooks();
  const categorybook = (await searchParams)?.query || null;
  const searchTitle  = (await searchParams)?.search || null;
  let searchBook = data;
if (searchTitle) {
  searchBook = data.filter(book => 
    book.book_title.toLowerCase().includes(searchTitle.toLowerCase())
  );
}
  const filteredBooks = categorybook
    ? data.filter(book => String(book.book_cate_id) === String(categorybook))
    : data;
  return (
    <>
      <div className="border-b-1 pb-5 border-[#409aa5] flex justify-between items-center">
        <ButtonTypeServer searchParams={categorybook} type={""} />
        <SelectCategoriesPage />
      </div>
      <BookCategoriesClient books={data} getfilter={filteredBooks} searchbook={searchBook}/>
    </>
  );
}
