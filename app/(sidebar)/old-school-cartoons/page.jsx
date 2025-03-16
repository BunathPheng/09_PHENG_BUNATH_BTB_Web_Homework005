
import CartoonCategoriesPage from '@/components/CartoonCategoriesPage';
import getAllCatoons from '@/services/getAllCatoons';
import React from 'react'
export default async function OldSchoolCartoons() {
  const carthoons = await getAllCatoons();
  return (
      <>
            <CartoonCategoriesPage cartoons={carthoons} />  
        </>
  );
}
