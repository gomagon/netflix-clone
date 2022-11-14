import axios from "axios";
import { Values } from "../values/Values";
import { useAppDispatch } from "../redux/hooks";
import { rdxSetMovies } from "../redux/moviesSlice";
import { api_movieType, api_movie_responseType, api_video_responseType } from "../types/type";

export const useGetMovies = () => {
  //redux
  const rdxDispatch = useAppDispatch();

  const axiosClient = axios.create({
    baseURL: Values.API_BASE_URL
  });

  const getMovies = (id: number) => {
    let lists: api_movieType[] = [];
    async function getData() {
      await axiosClient.get(`discover/movie?api_key=${Values.API_KEY}&with_genres=${id}`)
      .then((result) => {
        const res = result.data as api_movie_responseType;
        res.results.forEach((item) => {
          async function getDetail() {
            await axiosClient.get(`movie/${item.id}/videos?api_key=${Values.API_KEY}`)
            .then((result2) => {
              const res_movie = result2.data as api_video_responseType;
              const moviedata = {...item, youtube_key: res_movie.results[0]?.key}
              lists.push(moviedata);
              rdxDispatch(rdxSetMovies([...lists]));
            }).catch((e) => console.error(e))
          }
          getDetail();
        })
      }).catch((e) => console.error(e))
    }
    getData();
  }

  return {getMovies};
}
