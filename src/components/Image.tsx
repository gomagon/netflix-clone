import React from "react";
import style from "./css/Image.module.css";
import { api_movieType } from "../types/type";
import { useAppSelector } from "../redux/hooks";
import { rdxGetConfig } from "../redux/configSlice";
import { useAppDispatch } from "../redux/hooks";
import { rdxSetMainview } from "../redux/mainviewSlice";

export const Image: React.FC<api_movieType> = (props: api_movieType) => {
  //redux
  const rdxDispatch = useAppDispatch();
  const rdxConfig = useAppSelector(rdxGetConfig);

  const size = rdxConfig.images.backdrop_sizes[0];
  const url = `${rdxConfig.images.secure_base_url}${size}/${props.backdrop_path}`;

  const clickFunc = () => {
    rdxDispatch(rdxSetMainview(props));
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.Div} onClick={clickFunc}>
      <img className={style.Img} src={url} alt={props.title} id={props.title} />
      <span className={style.TitleSpan}>{props.title}</span>
    </div>
  );
};
