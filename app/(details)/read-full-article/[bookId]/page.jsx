import Breadcrumb from '@/components/Breadcrumb';
import CardDetail from '@/components/CardDetail';
import getAllBookById from '@/services/getAllBookById';
import getAllCartoonById from '@/services/getAllCartoonsById';
import { notFound } from 'next/navigation';

export default async function DetailsPage({ params, searchParams }) {
  // Safely access params and searchParams
  const id = params?.bookId; // Unified ID for both books and cartoons
  const type = searchParams?.type || '';

  // Validate type and id
  if (!type || !id) {
    notFound(); // Show 404 if type or id is missing
  }

  let data;
  if (type === 'book') {
    data = await getAllBookById(id);
  } else if (type === 'cartoon') {
    data = await getAllCartoonById(id);
  } else {
    notFound(); // Show 404 if type is invalid
  }

  if (!data) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        rule={type === 'book' ? 'Book categories' : 'Cartoon categories'}
        thing={data.book_title || data.cartoon_title}
      />
      <CardDetail {...data} />
    </>
  );
}