import BookCategoriesClient from '@/components/BookCategorieslPage';
import getAllBooks from '@/services/getAllBooks';
export default async function BookCategoriesPage() {
    const data = await getAllBooks(); 
  return (
    <>
        <BookCategoriesClient books={data} />
     
    </>
  );
}
