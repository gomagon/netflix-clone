import axios from "axios";
import { Values } from "../values/Values";
import { useAppDispatch } from "../redux/hooks";
import { rdxSetConfig } from "../redux/configSlice";

export const useGetConfig = () => {
  //redux
  const rdxDispatch = useAppDispatch();

  const getConfig = () => {
    async function async_get() {
      const axios_get = axios.create({
        baseURL: Values.API_BASE_URL
      });
      await axios_get.get(`configuration?api_key=${Values.API_KEY}`)
      .then((result) => rdxDispatch(rdxSetConfig(result.data)))
      .catch((e) => console.error(e));
    }
    async_get();
  }

  return { getConfig };
}