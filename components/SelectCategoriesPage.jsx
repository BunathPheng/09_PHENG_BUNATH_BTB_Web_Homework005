import getAllBookByCategories from '@/services/getAllBookCategories'
import React from 'react'
import SelectCartegories from './SelectCartegories';
import getAllCartoonsByCategories from '@/services/getAllCartoonsByCategories';

export default async function SelectCategoriesPage() {
    const categories = await  getAllBookByCategories();
    const carthoonsCategories = await getAllCartoonsByCategories();
  return ( 
    <div>
       <SelectCartegories ca={carthoonsCategories} ba={categories}/>
    </div>
  )
}
