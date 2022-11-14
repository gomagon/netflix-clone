import axios from "axios";
import { api_movieType, api_videoType } from "../types/type";
import { Values } from "../values/Values";

const axios_category = axios.create({
  baseURL: Values.API_BASE_URL
});

export const getItemsFromCategory = async (category: string) => {
  const return_value = await axios_category.get(`/movie/${category}?api_key=${Values.API_KEY}`)
  .then((result) => result.data.results as api_movieType[])
  return return_value;
}

export const getDetail = async (item: api_movieType) => {
  const return_value = await axios_category.get(`movie/${item.id}/videos?api_key=${Values.API_KEY}`)
  .then((result) => result.data.results[0] as api_videoType)
  return return_value;
}
