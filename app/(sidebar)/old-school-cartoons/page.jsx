import ButtonTypeServer from '@/components/ButtonTypeServer';
import CartoonCategoriesPage from '@/components/CartoonCategoriesPage';
import SelectCategoriesPage from '@/components/SelectCategoriesPage';
import getAllCartoonByGenre from '@/services/getAllCartoonByGenre';
import getAllCatoons from '@/services/getAllCatoons';
import { getAllCatoonsByTitle } from '@/services/getAllCatoonsByTitle';
import React from 'react';

export default async function OldSchoolCartoons({ params, searchParams }) {
    const cartoons = await getAllCatoons();
    const categoryCatoonById = searchParams?.genre || null;
    const searchCatoonsByTitle  = searchParams?.search || null;

    console.log(searchCatoonsByTitle);
    const  getCartoonsByCategory = await getAllCartoonByGenre(categoryCatoonById);
    const   dataBySearchCatoons = await getAllCatoonsByTitle(searchCatoonsByTitle);
    console.log(dataBySearchCatoons);
    return (
        <>
            <div className="border-b-1 pb-5 border-[#409aa5] flex justify-between items-center">
                <ButtonTypeServer searchParams={categoryCatoonById} type={"cartoons"} />
                <SelectCategoriesPage />
            </div>
            <CartoonCategoriesPage cartoons={cartoons} getCategoeisCatoons={getCartoonsByCategory} searchCatoons={dataBySearchCatoons}/>
        </>
    );
}
