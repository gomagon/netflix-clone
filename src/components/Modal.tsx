import React, { useState } from "react";
import style from "./css/Modal.module.css";
import { rdxSetModal } from "../redux/modalSlice";
import { rdxGetGenres } from "../redux/genresSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { rdxGetMovies } from "../redux/moviesSlice";
import { rdxGetConfig } from "../redux/configSlice";
import { useGetMovies } from "../hooks/useGetMovies";
import { rdxSetMainview } from "../redux/mainviewSlice";
import { api_movieType } from "../types/type";

export const Modal: React.FC = () => {
  //redux
  const rdxMovies = useAppSelector(rdxGetMovies);
  const rdxGenres = useAppSelector(rdxGetGenres);
  const rdxConfig = useAppSelector(rdxGetConfig);
  const rdxDispatch = useAppDispatch();
  //useState used in this file
  const [selectedNumber, setSelectedNumber] = useState(-1);
  //hooks
  const { getMovies } = useGetMovies();

  const size = rdxConfig.images.backdrop_sizes[0];

  const closeButtonClicked = () => {
    rdxDispatch(rdxSetModal(false));
  };
  const genreSelected = (id: number) => {
    setSelectedNumber(id);
    // get movies at selected genre by hooks
    getMovies(id);
  };
  const itemSelected = (item: api_movieType) => {
    rdxDispatch(rdxSetModal(false));
    rdxDispatch(rdxSetMainview(item));
  };

  return (
    <section className={style.Container} id="Modal">
      <div className={style.AllDiv}>
        <div className={style.SubDiv}>
          <div className={style.GenreDiv}>
            {rdxGenres.genres.map((item) => (
              <button
                className={`${style.GenreButton} ${
                  selectedNumber === item.id && style.GenreButton__Selected
                }`}
                key={item.id}
                onClick={() => genreSelected(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className={style.ItemDiv}>
            {selectedNumber !== -1 &&
              rdxMovies.map((item) => (
                <div key={item.id} onClick={() => itemSelected(item)}>
                  <div>
                    <label>{item.title}</label>
                    <label>{item.overview}</label>
                  </div>
                  <img
                    alt={item.title}
                    src={`${rdxConfig.images.secure_base_url}${size}/${item.backdrop_path}`}
                  />
                </div>
              ))}
          </div>
        </div>
        <button className={style.Button__Close} onClick={closeButtonClicked}>
          close
        </button>
      </div>
    </section>
  );
};
