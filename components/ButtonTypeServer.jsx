import getAllBookSearch from "@/services/getAllBookSearch";
import getCatoonsSearch from "@/services/getAllCathoonsSearch";
import ButtonType from "./ButtonType";

export default async function ButtonTypeServer({ searchParams, type }) {
  let getSearchCatoons = null;
  let getSearchBooks = null;
  let dynamicText = "";
 
  if (searchParams) {
    if (type === "cartoons") {
      getSearchCatoons = await getCatoonsSearch(searchParams);
      dynamicText = getSearchCatoons?.cartoon_genre || "";
    } else {
      getSearchBooks = await getAllBookSearch(searchParams);
      dynamicText = getSearchBooks?.book_cate_name || "";
    }
  }

  return <ButtonType name={dynamicText} />;
}