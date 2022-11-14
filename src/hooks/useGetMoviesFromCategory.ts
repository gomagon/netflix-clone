import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../redux/hooks";
import { api_movieType, api_videoType } from "../types/type";
import { getDetail, getItemsFromCategory } from "../utils/api";
import { rdxSetMainview } from "../redux/mainviewSlice";

export const useGetMoviesFromCategory = () => {
  //redux
  const rdxDispatch = useAppDispatch();

  const getMoviesFromCategory = (first_movie_id: number, first_category: string, category: string, setSlice: ActionCreatorWithPayload<any, string>) => {
    const lists: api_movieType[] = [];
    async function async_getItems() {
      const items: api_movieType[] = await getItemsFromCategory(category);
      let counter = 0;
      items.forEach((item) => {
        async function async_getDetail() { 
          const detail: api_videoType = await getDetail(item);
          const moviedata = {...item, youtube_key: detail?.key}
          lists.push(moviedata);
          rdxDispatch(setSlice([...lists]));
          counter++;
          if(counter === first_movie_id && first_category === category) {
            rdxDispatch(rdxSetMainview(moviedata));
          }
        }
        async_getDetail();
      })
    }
    async_getItems();
  }
  return {getMoviesFromCategory};
}
