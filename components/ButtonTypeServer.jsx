import React from "react";
import ButtonType from "./ButtonType";
import getCatoonsSearch from "@/services/getAllCathoonsSearch";
import getAllBookSearch from "@/services/getAllBookSearch";

export default async function ButtonTypeServer({ searchParams }) {
  let getSearchCatoons = null;
  let getSearchBooks = null;
 

  if (searchParams) {
    getSearchCatoons = await getCatoonsSearch(searchParams);
    getSearchBooks = await getAllBookSearch(searchParams);
  }

  let dynamicText = "";
  if (getSearchCatoons?.cartoon_genre) {
    dynamicText = getSearchCatoons.cartoon_genre;
  }
  else if(getSearchBooks?.book_cate_name) {
    dynamicText = getSearchBooks.book_cate_name;
    
  }

  return <ButtonType name={dynamicText} />;
}
