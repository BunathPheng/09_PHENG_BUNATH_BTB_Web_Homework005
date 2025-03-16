import Breadcrumb from '@/components/Breadcrumb';
import CardDetail from '@/components/CardDetail';
import getAllBookById from '@/services/getAllBookById';
import getAllCartoonById from '@/services/getAllCartoonsById';
import { notFound } from 'next/navigation';

export default async function DetailsPage({ params, searchParams }) {
  const id = params?.Id; 
  const type = searchParams?.type || '';
  let data;
  if (type === 'book') {
    data = await getAllBookById(id);
  } else if (type === 'cartoon') {
    data = await getAllCartoonById(id);
  } else {
    notFound(); 
  }
  return (
    <>
      <Breadcrumb
        rule={type === 'book' ? 'Book categories' : 'Old-school-cartoons'}
        thing={data.book_title || data.ct_title}
      />
      <CardDetail {...data} />
    </>
  );
}