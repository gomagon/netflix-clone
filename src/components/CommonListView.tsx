import React, { useEffect } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useGetMoviesFromCategory } from "../hooks/useGetMoviesFromCategory";
import { useAppSelector } from "../redux/hooks";
import style from "./css/CommonListView.module.css";
import { Image } from "./Image";
import { SlickEx } from "./SlickEx";
import { api_movieType } from "../types/type";
import { RootState } from "../redux/store";

type propsType = {
  title: string;
  category: string;
  rdxSetSlice: ActionCreatorWithPayload<any, string>;
  rdxGetSlice: (state: RootState) => api_movieType[];
  first_movie_id: number;
  first_category: string;
};

export const CommonListView: React.FC<propsType> = (props: propsType) => {
  //redux
  const rdxMovies = useAppSelector(props.rdxGetSlice);
  //hooks
  const { getMoviesFromCategory } = useGetMoviesFromCategory();
  useEffect(() => {
    getMoviesFromCategory(
      props.first_movie_id,
      props.first_category,
      props.category,
      props.rdxSetSlice
    );
  }, []);

  return (
    <section className={style.Container} id={props.title}>
      <h3>{props.title}</h3>
      <SlickEx item_count={rdxMovies.length}>
        {rdxMovies.map((item) => (
          <div key={item.title}>
            <Image {...item} />
          </div>
        ))}
      </SlickEx>
    </section>
  );
};
