import React, { useEffect } from "react";
import { Header } from "./Header";
import { MainView } from "./MainView";
import { useGetConfig } from "../hooks/useGetConfig";
import { MyList } from "./MyList";
import { useGetGenres } from "../hooks/useGetGenres";
import { CommonListView } from "./CommonListView";
import { rdxGetToprated, rdxSetToprated } from "../redux/topratedSlice";
import { rdxGetNowplaying, rdxSetNowplaying } from "../redux/nowplayingSlice";
import { rdxGetPopular, rdxSetPopular } from "../redux/popularSlice";
import { rdxGetUpcoming, rdxSetUpcoming } from "../redux/upcomingSlice";

const getRandom = (num: number) => {
  const min = 1;
  const max = num;
  const rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};

export const Home: React.FC = () => {
  //redux
  const { getConfig } = useGetConfig();
  const { getGenres } = useGetGenres();
  //first movie
  const first_movie_id = getRandom(18);
  const category_id = getRandom(5) - 1;
  const categories = ["top_rated", "upcoming", "popular", "now_playing"];
  const first_category = categories[category_id];

  useEffect(() => {
    getConfig();
    getGenres();
  }, []);

  return (
    <>
      <Header />
      <MainView />
      <MyList />
      <CommonListView
        first_movie_id={first_movie_id}
        first_category={first_category}
        title="Top Rated"
        category="top_rated"
        rdxGetSlice={rdxGetToprated}
        rdxSetSlice={rdxSetToprated}
      />
      <CommonListView
        first_movie_id={first_movie_id}
        first_category={first_category}
        title="Up Coming"
        category="upcoming"
        rdxGetSlice={rdxGetUpcoming}
        rdxSetSlice={rdxSetUpcoming}
      />
      <CommonListView
        first_movie_id={first_movie_id}
        first_category={first_category}
        title="Popular"
        category="popular"
        rdxGetSlice={rdxGetPopular}
        rdxSetSlice={rdxSetPopular}
      />
      <CommonListView
        first_movie_id={first_movie_id}
        first_category={first_category}
        title="Now Playing"
        category="now_playing"
        rdxGetSlice={rdxGetNowplaying}
        rdxSetSlice={rdxSetNowplaying}
      />
    </>
  );
};
