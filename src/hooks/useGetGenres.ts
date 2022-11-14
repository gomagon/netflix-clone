import axios from "axios";
import { Values } from "../values/Values";
import { useAppDispatch } from "../redux/hooks";
import { rdxSetGenres } from "../redux/genresSlice";

export const useGetGenres = () => {
  //redux
  const rdxDispatch = useAppDispatch();

  const getGenres = () => {
    async function async_get() {
      const axios_get = axios.create({
        baseURL: Values.API_BASE_URL
      });
      await axios_get.get(`genre/movie/list?api_key=${Values.API_KEY}`)
      .then((result) => rdxDispatch(rdxSetGenres(result.data)))
      .catch((e) => console.error(e));
    }
    async_get();
  }

  return { getGenres };
}